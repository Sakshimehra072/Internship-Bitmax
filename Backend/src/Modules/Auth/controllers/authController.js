const transporter = require("../../../config/mailConfig");
const generateOtp = require("../../../utils/generateOtp");

const sendOtp = async (req, res) => {
    try {
        const { email } = req.body;

        const otp = generateOtp();

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Email Verification OTP",
            text: `Your OTP is ${otp}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: "OTP sent successfully",
            otp,
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to send OTP",
        });
    }
};

module.exports = { sendOtp };