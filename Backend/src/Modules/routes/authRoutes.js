const express = require("express");

const router = express.Router();

const { sendOtp } = require("../Auth/controllers/authController");

router.post("/send-otp", sendOtp);

module.exports = router;