import { Order } from "../models/order.models.js";

export const newOrder = async (req, res) => {
  const { products } = req.body;
  const totalAmount = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );
  const order = new Order({ userId: req.user._id, products, totalAmount });
  await order.save();
  res.status(201).send(order);
};

export const getOrder = async (req, res) => {
  const orders = await Order.find({ userId: req.user._id });
  res.json(orders);
};
