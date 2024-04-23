/* GET timestamp from route parameter */
const getTimestamp = (req, res) => {
  const { date } = req.params;
  if (!date) {
    return res.json({ unix: Date.now() });
  }
  if (!+date) {
    const newDate = new Date(date);
    try {
      newDate.toISOString();

      return res.json({
        unix: newDate.getTime(),
        utc: newDate.toUTCString(),
      });
    } catch (error) {
      return res.json({ error: "Invalid Date" });
    }
  }
  const newDate = new Date(+date);
  return res.json({
    unix: newDate.getTime(),
    utc: newDate.toUTCString(),
  });
};

module.exports = { getTimestamp };
