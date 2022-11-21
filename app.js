import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { v4 as uuidv4 } from "uuid";
import models from "./src/models/index.js";
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

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use("/session", routes.session);
app.use("/users", routes.user);
app.use("/messages", routes.message);

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
