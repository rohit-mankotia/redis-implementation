require("dotenv").config();

const express = require("express");

const { connectRedisClient } = require("./redisConnection");
const routes = require("./routes");

const app = express();

const { PORT } = process.env;

connectRedisClient();

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
