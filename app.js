import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import routes from "./src/routes/index.js";
require("dotenv").config({ path: "./config.env" });

const app = express();
// Set up mongoose connection
const mongoose = require("mongoose");
const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/posts", routes.post);
app.use("/users", routes.user);
app.use("/comments", routes.comment);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

app.listen(3000, () => console.log(`musik api listening on port 3000!`));
