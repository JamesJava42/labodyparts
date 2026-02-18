module.exports = async (_req, res) => {
  return res.status(200).json({
    ok: true,
    service: "autobodyparts",
    mode: "vercel-serverless"
  });
};
