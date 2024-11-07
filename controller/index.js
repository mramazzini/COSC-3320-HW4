const router = require("express").Router();

const fooditem = require("./food-item");
const order = require("./order");
const report = require("./report");

router.use("/food-item", fooditem);
router.use("/order", order);
router.use("/report", report);

module.exports = router;
