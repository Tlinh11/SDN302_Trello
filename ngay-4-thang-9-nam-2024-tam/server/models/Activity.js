const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    action: { type: String, required: true },
    entity: {
      type: { type: String, enum: ["board", "list", "card"], required: true },
      id: { type: mongoose.Schema.Types.ObjectId, required: true },
    },
    data: { type: mongoose.Schema.Types.Mixed },
    board: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
      required: true,
    },
  },
  { timestamps: true }
);

const Activity = mongoose.model("Activity", activitySchema);
