import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  loginTime: {
    type: Date,
  },
  logoutTime: {
    type: Date,
  },
  ipAddress: {
    type: String,
  },
});

export const Session = mongoose.model("Session", sessionSchema);
