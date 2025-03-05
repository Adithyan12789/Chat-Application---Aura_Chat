import express from "express";
import { isAuthenticated } from "../Middlewares/auth.middlware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../Controllers/message.controller.js";

const router = express.Router();

router.get("/users", isAuthenticated, getUsersForSidebar);
router.get("/:id", isAuthenticated, getMessages);
router.post("/send/:id", isAuthenticated, sendMessage);

export default router;
