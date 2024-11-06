const express = require("express");
const { placeOrder } = require("../../transactions");
const router = express.Router();

router.post("/", async (req, res) => {
  const order = req.body;
  placeOrder(order);
  res.json(order);
});

module.exports = router;
