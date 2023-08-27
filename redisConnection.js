const { createClient } = require("redis");

const { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT } = process.env;

const client = createClient({
  password: REDIS_PASSWORD,
  socket: {
    host: REDIS_HOST,
    port: REDIS_PORT,
  },
});

const connectRedisClient = async () => {
  try {
    await client.connect();
    console.log("redis connected!");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  client,
  connectRedisClient,
};
