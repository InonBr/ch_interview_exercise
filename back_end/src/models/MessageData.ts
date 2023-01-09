import mongoose from "mongoose";

const MessageData = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("messageData", MessageData);
