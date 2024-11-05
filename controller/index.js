const fooditem = require("./food-item");
const order = require("./order");
const router = require("express").Router();

router.use("/food-item", fooditem);
router.use("/order", order);

module.exports = router;
