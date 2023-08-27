const express = require("express");
const router = express.Router();

const { initial, setData, getData } = require("./controller");

router.get("/", initial);
router.get("/set", setData);
router.get("/get", getData);

module.exports = router;
