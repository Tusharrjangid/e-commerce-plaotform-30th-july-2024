import { User } from "../models/user.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    await user.save();
    return res.status(200).json({ user, message: "User Registered" });
  } catch (error) {
    return res
      .status(500)
      .json({ err: message.error, message: "Error while registring user" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send("Invalid Credentail");
    }
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      "fiaheoi839hfai"
    );
    return res.status(200).json({ token, message: "Logged in successfully" });
  } catch (error) {
    return res.status(500).json({
      message: message.error,
    });
  }
};
