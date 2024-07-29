import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./Db/database.js";
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import sessionRouter from "./routes/session.routes.js";
import cartRouter from "./routes/cart.routes.js";
import orderRouter from "./routes/order.routes.js";
import paymentRouter from "./routes/payment.routes.js";

const app = express();

dotenv.config();

connectDb();

app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/session", sessionRouter);
app.use("/api/v1/cartt", cartRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/payment", paymentRouter);

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log("Server Connected Successfully");
});
