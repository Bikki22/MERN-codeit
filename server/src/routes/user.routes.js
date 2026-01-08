import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
  updateUserProfile,
} from "../controllers/user.controllers.js";
import {
  verifyJWT,
  verifyPermission,
} from "../middlewares/auth.middlewares.js";
import multer from "multer";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/create", verifyJWT, verifyPermission(["ADMIN"]), createUser);
router.put("/:id", verifyJWT, verifyPermission(["ADMIN"]), updateUser);
router.get("/all", verifyJWT, verifyPermission(["ADMIN"]), getAllUsers);
router.get("/:id", verifyJWT, verifyPermission(["ADMIN"]), getUserById);
router.delete("/:id", verifyJWT, verifyPermission(["ADMIN"]), deleteUser);
router.patch(
  "/profile-image/:id",
  upload.single("profileImage"),
  updateUserProfile
);

export default router;
