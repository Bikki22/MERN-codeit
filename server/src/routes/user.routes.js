import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.controllers.js";
import {
  verifyJWT,
  verifyPermission,
} from "../middlewares/auth.middlewares.js";
import { forgotPasswordRequest } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/create", verifyJWT, verifyPermission(["ADMIN"]), createUser);
router.put("/:id", verifyJWT, verifyPermission(["ADMIN"]), updateUser);
router.get("/all", verifyJWT, verifyPermission(["ADMIN"]), getAllUsers);
router.get("/:id", verifyJWT, verifyPermission(["ADMIN"]), getUserById);
router.delete("/:id", verifyJWT, verifyPermission(["ADMIN"]), deleteUser);

export default router;
