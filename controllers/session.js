import { Session } from "../models/session.models.js";
import { User } from "../models/user.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginSession = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send("Invalid Credentail");
  }
  const token = jwt.sign(
    { userId: user._id, role: user.role },
    "fiaheoi839hfai"
  );
  const session = new Session({
    userId: user._id,
    loginTime: new Date(),
    ipAddress: req.ip,
  });
  await session.save();
  res.json({ token });
};

export const getLoginSession = async (req, res) => {
  const session = await Session.find({ userId: req.user._id });
  res.send(session);
};
