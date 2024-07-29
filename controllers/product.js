import { Product } from "../models/product.models.js";

export const createProduct = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(400).send("Access Denied");
    }
    const product = new Product(req.body);
    await product.save();
    return res
      .status(201)
      .json({ product, message: "Product Created Successfully" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res
      .status(200)
      .json({ products, message: "Products fetched successfully" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const updateProduct = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(400).send("Access Denied");
    }
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({ product, message: "Product Updated" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(400).send("Access Denied");
    }
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json("Product Deleted Successfully");
  } catch (error) {
    return res.status(500).send("Product Deleted Successfully");
  }
};
