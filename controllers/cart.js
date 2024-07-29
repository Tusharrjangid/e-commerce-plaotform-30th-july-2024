import { Cart } from "../models/cart.models.js";

export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.userId;

  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, products: [] });
    }

    const productIndex = cart.products.findIndex((p) =>
      p.productId.equals(productId)
    );
    if (productIndex !== -1) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }

    await cart.save();
    res.status(200).send("Product added to cart");
  } catch (error) {
    res.status(500).send("Error adding product to cart");
  }
};

export const getCart = async (req, res) => {
  const userId = req.user.userId;
  try {
    const cart = await Cart.findOne({ userId }).populate("products.productId");
    if (!cart) {
      return res.status(400).send("Cart not found");
    }
    res.json(cart);
  } catch (error) {
    res.status(500).send("Error retrrieving cart");
  }
};
