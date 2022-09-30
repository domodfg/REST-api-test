var express = require("express");
var router = express.Router();

let messages = {
  1: {
    id: "1",
    text: "Hello World",
    userId: "1",
  },
  2: {
    id: "2",
    text: "By World",
    userId: "2",
  },
};

/* GET home page. */
router.get("/", function (req, res, next) {
  return res.send(Object.values(messages));
});

router.get("/:messageId", function (req, res, next) {
  return res.send(messages[req.params.messageId]);
});

module.exports = router;
