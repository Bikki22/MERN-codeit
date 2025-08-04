import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db/db.js";
import multer from "multer";

// routes
import productRouter from "./routes/product.routes.js";
import userRouter from "./routes/user.routes.js";
import connectCloudinary from "./config/cloudinary.js";

const app = express();
dotenv.config();

const upload = multer({ storage: multer.memoryStorage() });
connectCloudinary();

const PORT = process.env.PORT ?? 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.use("/api/v1/product", upload.array("images", 5), productRouter);
app.use("/api/v1/auth", userRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running in port: http://localhost:${PORT}`);
});
