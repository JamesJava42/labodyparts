const nodemailer = require("nodemailer");

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

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const order = req.body;
  const validationError = validateOrder(order);
  if (validationError) {
    return res.status(400).json({ ok: false, error: validationError });
  }

  const notifyEmail = process.env.NOTIFY_EMAIL || "jamesreddy1505@gmail.com";
  const transporter = buildTransporter();

  try {
    if (!transporter) {
      console.log("[Order Received - SMTP not configured]", JSON.stringify(order));
      return res.status(200).json({ ok: true, emailSent: false, mode: "log-only" });
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: notifyEmail,
      subject: `[AutoBodyParts] New Order ${order.requestId}`,
      html: orderToHtml(order)
    });

    return res.status(200).json({ ok: true, emailSent: true, to: notifyEmail });
  } catch (error) {
    console.error("Order email send error:", error);
    return res.status(500).json({ ok: false, error: "Failed to send order notification email." });
  }
};
