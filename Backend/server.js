// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const otpRoutes = require("./src/Modules/routes/otpRoutes");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/otp", otpRoutes);

// app.use("/health", (req, res) => {
//   res.send("Hello");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });





const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const otpRoutes = require("./src/Modules/routes/otpRoutes");
const authRoutes = require("./src/Modules/routes/authRoutes");

// Route APIs
app.use("/api/otp", otpRoutes);
app.use("/api/auth", authRoutes);

// Health Route
app.get("/health", (req, res) => {
  res.send("Hello");
});

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});