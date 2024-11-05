const express = require("express");
const { getFoodItems } = require("../../transactions");
const router = express.Router();

router.get("/", async (req, res) => {
  const foodItems = await getFoodItems();
  res.json(foodItems);
});

module.exports = router;
