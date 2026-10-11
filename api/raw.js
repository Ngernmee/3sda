// Raw script endpoint.
// This returns a loader statement as plain text. Only use scripts you trust.
const SCRIPT = 'loadstring(game:HttpGet("https://pastefy.app/XPMBIf8N/raw"))()';

module.exports = (req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.status(200).send(SCRIPT);
};