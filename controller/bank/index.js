const express = require("express");
const { getBankAccounts, isValidCard } = require("../../transactions");
const router = express.Router();

router.get("/", async (req, res) => {
  const accounts = await getBankAccounts();
  res.json(accounts);
});

router.post("/validate", async (req, res) => {
  const validResponse = await isValidCard(req.body);
  if (validResponse.length > 0) {
    res.json({ isValid: true });
  } else {
    res.json({ isValid: false });
  }
});

module.exports = router;
