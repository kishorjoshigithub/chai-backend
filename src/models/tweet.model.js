import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    content: {
      Type: String,
      required: true,
    },
    owner: {
      Type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Tweet = mongoose.model("Tweet", tweetSchema);
