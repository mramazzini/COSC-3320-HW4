const express = require("express");
const { getNetRevenue } = require("../../transactions");
const router = express.Router();

router.get("/", async (req, res) => {
  const netRevenue = await getNetRevenue();
  res.json(netRevenue);
});

module.exports = router;
