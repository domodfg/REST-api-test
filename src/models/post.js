const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  upvote: { type: Number, default: 0 },
});

// Virtual for book's URL
PostSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return "/post" + this._id;
});

PostSchema.virtual("date_formatted").get(function () {
  return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED);
});

// Export model
module.exports = mongoose.model("Post", PostSchema);
