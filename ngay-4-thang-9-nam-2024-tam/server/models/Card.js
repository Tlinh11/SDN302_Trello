const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    list: { type: mongoose.Schema.Types.ObjectId, ref: "List", required: true },
    order: { type: Number, required: true },
    assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
