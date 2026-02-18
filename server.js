require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const PORT = Number(process.env.PORT || 8080);
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "jamesreddy1505@gmail.com";

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname)));

function buildTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });
}

function orderToHtml(order) {
  const itemRows = order.items
    .map(
      (item) => `<tr>
        <td style="padding:6px 8px;border:1px solid #d9e0ea;">${item.name}</td>
        <td style="padding:6px 8px;border:1px solid #d9e0ea;">${item.qty}</td>
        <td style="padding:6px 8px;border:1px solid #d9e0ea;">$${Number(item.price).toFixed(2)}</td>
      </tr>`
    )
    .join("");

  return `<div style="font-family:Arial,sans-serif;color:#102131;">
    <h2>New AutoBodyParts Order Request</h2>
    <p><strong>Request ID:</strong> ${order.requestId}</p>
    <p><strong>Customer:</strong> ${order.customer.name}</p>
    <p><strong>Phone:</strong> ${order.customer.phone}</p>
    <p><strong>Email:</strong> ${order.customer.email}</p>
    <p><strong>Address:</strong> ${order.customer.address}, ${order.customer.city}, ${order.customer.state} ${order.customer.zip}</p>
    <p><strong>Distance:</strong> ${order.distance} miles</p>
    <p><strong>Shipping:</strong> ${order.shipping}</p>
    <p><strong>ETA:</strong> ${order.eta}</p>
    <p><strong>Estimated Total:</strong> $${Number(order.total).toFixed(2)}</p>
    <h3>Items</h3>
    <table style="border-collapse:collapse;min-width:520px;">
      <thead>
        <tr>
          <th style="text-align:left;padding:6px 8px;border:1px solid #d9e0ea;">Part</th>
          <th style="text-align:left;padding:6px 8px;border:1px solid #d9e0ea;">Qty</th>
          <th style="text-align:left;padding:6px 8px;border:1px solid #d9e0ea;">Unit Price</th>
        </tr>
      </thead>
      <tbody>${itemRows}</tbody>
    </table>
    <p style="margin-top:12px;"><strong>Notes:</strong> ${order.customer.notes || "-"}</p>
  </div>`;
}

function validateOrder(order) {
  if (!order || typeof order !== "object") return "Missing order payload.";
  if (!order.requestId) return "Missing requestId.";
  if (!Array.isArray(order.items) || order.items.length === 0) return "Order must include at least one item.";
  if (!order.customer || !order.customer.name || !order.customer.phone || !order.customer.email) {
    return "Customer details are incomplete.";
  }
  return null;
}

app.post("/api/orders", async (req, res) => {
  const order = req.body;
  const error = validateOrder(order);

  if (error) {
    return res.status(400).json({ ok: false, error });
  }

  const transporter = buildTransporter();

  try {
    if (!transporter) {
      console.log("[Order Received - SMTP not configured]\n", JSON.stringify(order, null, 2));
      return res.json({ ok: true, emailSent: false, mode: "log-only" });
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: NOTIFY_EMAIL,
      subject: `[AutoBodyParts] New Order ${order.requestId}`,
      html: orderToHtml(order)
    });

    return res.json({ ok: true, emailSent: true, to: NOTIFY_EMAIL });
  } catch (sendError) {
    console.error("Order email send error:", sendError);
    return res.status(500).json({ ok: false, error: "Failed to send order notification email." });
  }
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "autobodyparts", notifyEmail: NOTIFY_EMAIL });
});

app.listen(PORT, () => {
  console.log(`AutoBodyParts server running at http://localhost:${PORT}`);
});
