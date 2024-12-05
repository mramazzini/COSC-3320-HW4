const router = require("express").Router();

const fooditem = require("./food-item");
const order = require("./order");
const report = require("./report");
const bank = require("./bank");

router.use("/food-item", fooditem);
router.use("/order", order);
router.use("/report", report);
router.use("/bank", bank);

module.exports = router;
