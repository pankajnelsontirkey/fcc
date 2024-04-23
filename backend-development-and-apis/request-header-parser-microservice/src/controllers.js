const getClientInfo = (req, res) => {
  const {
    ip: ipaddress,
    headers: { "accept-language": language, "user-agent": software },
  } = req;

  return res.json({ ipaddress, language, software });
};

module.exports = { getClientInfo };
