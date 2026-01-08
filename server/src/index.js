import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// routes
import productRouter from "./routes/product.routes.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import orderRoutes from "./routes/order.routes.js";
import connectCloudinary from "./config/cloudinary.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT ?? 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    exposedHeaders: ["Set-Cookie", "*"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectCloudinary();

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/orders", orderRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running in port: http://localhost:${PORT}`);
});
