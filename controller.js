const { client } = require("./redisConnection");

const initial = (req, res) => {
  res.json({ message: "Server started" });
};

const setData = async (req, res) => {
  try {
    const data = await client.set("Name", "Rohit Mankotia");
    res.json({ data });
  } catch (err) {
    res.json({ status: 500, error: err.message });
  }
};

const getData = async (req, res) => {
  try {
    const data = await client.get("Name");
    res.json({ data });
  } catch (err) {
    res.json({ status: 500, error: err.message });
  }
};

module.exports = {
  initial,
  setData,
  getData,
};
