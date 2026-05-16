const express = require("express");
const cors = require("cors");
require("dotenv").config();

const otpRoutes = require("./src/Modules/routes/otpRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/otp", otpRoutes);

app.use("/health", (req, res) => {
  res.send("Hello");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
