import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
    },
  ],
  totalAmount: {
    // type: Number,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
});

export const Order = mongoose.model("Order", orderSchema);
