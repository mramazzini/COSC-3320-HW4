const express = require("express");
const { placeOrder } = require("../../transactions");
const router = express.Router();

router.post("/", async (req, res) => {
  const order = req.body;
  const orderRes = await placeOrder(order);
  res.json(orderRes);
});

module.exports = router;
