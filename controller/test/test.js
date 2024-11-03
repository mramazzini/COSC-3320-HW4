//test for express router

var express = require("express");

var router = express.Router();

router.get("/", function (req, res) {
  res.send("GET handler for /test route.");
});

module.exports = router;
