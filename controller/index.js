const test = require("./test/test");
const router = require("express").Router();

router.use("/test", test);

module.exports = router;
