import { Router } from "express";
import User from "../models/user.js";

const router = Router();

router.get("/", (req, res, next) => {
  User.find({}, "username")
    .sort({ username: 1 })
    .populate("username")
    .exec(function (err, list_users) {
      if (err) {
        return next(err);
      }
      res.send(list_users);
    });
});

router.get("/:userId", (req, res, next) => {
  User.findById(req.params.id)
    .populate("username")
    .exec(function (err, user) {
      if (err) {
        return next(err);
      }
      res.send(user);
    });
});

export default router;
