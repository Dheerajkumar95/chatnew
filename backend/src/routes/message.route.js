const express = require("express");
const { protectRoute } = require("../middleware/auth.middleware.js");
const { getMessages, getUsersForSidebar, sendMessage } = require("../controllers/message.controller.js");

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessage);

module.exports = router;