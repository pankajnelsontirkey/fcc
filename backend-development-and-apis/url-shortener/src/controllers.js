const { saveUrl } = require("./helper");

const getShortUrl = (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: "No url was provided!" });
  }

  const result = saveUrl(url);
  console.log("result", result);

  return res.json({ original_url: "", short_url: result });
};

const getOriginalUrl = (req, res) => {
  return res.json({ original_url: "" });
};

module.exports = { getShortUrl, getOriginalUrl };
