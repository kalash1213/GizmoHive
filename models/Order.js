import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: "user", 
  },
  items: [
    {
      product: {
        type: String,
        ref: "Product", 
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      }
    }
  ],
  amount: {
    type: Number,
    required: true,
  },
  address: {
    type:String,
    ref: "Address", 
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Order Placed",
  },
  date: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
