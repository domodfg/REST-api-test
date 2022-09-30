var express = require("express");
var router = express.Router();

let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};

/* GET users listing. */
router.get("/", function (req, res, next) {
  return res.send(Object.values(users));
});

router.get('/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});

router.post("/", (req, res) => {
  return res.send("Received a POST HTTP method");
});

router.put("/:userId", (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

router.delete("/:userId", (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});

module.exports = router;
