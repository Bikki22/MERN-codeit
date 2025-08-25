import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db/db.js";
import multer from "multer";
import cookieParser from "cookie-parser";
import connectCloudinary from "./config/cloudinary.js";
import cors from "cors";

// routes
import productRouter from "./routes/product.routes.js";
import userRouter from "./routes/user.routes.js";
import orderRoutes from "./routes/order.routes.js";

const app = express();
dotenv.config();

const upload = multer({ storage: multer.memoryStorage() });
connectCloudinary();

const PORT = process.env.PORT ?? 5000;

app.use(
  cors({
    // origin: "process.env.BASE_URI",
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/product", upload.array("images", 5), productRouter);
app.use("/apip/v1/orders", orderRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running in port: http://localhost:${PORT}`);
});
