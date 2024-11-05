const express = require("express");
const { getFoodItems } = require("../../transactions");
const router = express.Router();

router.post("/", async (req, res) => {
  const order = req.body;

  res.json(order);
});

module.exports = router;
