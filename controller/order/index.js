const express = require("express");
const { placeOrder, getOrders } = require("../../transactions");
const router = express.Router();

router.post("/", async (req, res) => {
  const order = req.body;
  const orderRes = await placeOrder(order);
  res.json(orderRes);
});

router.get("/", async (req, res) => {
  const orders = await getOrders();
  res.json(orders);
});

module.exports = router;
