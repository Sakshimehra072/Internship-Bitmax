const twilio = require("twilio");

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

let generatedOtp = "";

exports.sendOtp = async (req, res) => {
  const { phone } = req.body;
  console.log("Reached")

  generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    await client.messages.create({
      body: `Your OTP is ${generatedOtp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });

    res.json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.verifyOtp = (req, res) => {
  const { otp } = req.body;

  if (otp === generatedOtp) {
    res.json({
      success: true,
      message: "OTP verified successfully",
    });
  } else {
    res.json({
      success: false,
      message: "Invalid OTP",
    });
  }
};