import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const [error, setError] = useState("");
  const [showOtpBox, setShowOtpBox] = useState(false);

  const sendOtp = async () => {
    if (name.trim() === "") {
      setError("Name is required");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Enter valid email");
      return;
    }

    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/otp/send",
        {
          phone,
        }
      );

      alert(res.data.message);

      setShowOtpBox(true);
    } catch (error) {
      setError("Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    if (otp.trim() === "") {
      setError("Enter OTP");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/otp/verify",
        {
          phone,
          otp,
        }
      );

      alert(res.data.message);

      setName("");
      setPhone("");
      setEmail("");
      setOtp("");
      setShowOtpBox(false);
      setError("");
    } catch (error) {
      setError("OTP Verification Failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Registration Page</h1>

      <label>Name</label>
      <br />

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <label>Phone Number</label>
      <br />

      <input
        type="text"
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br />
      <br />

      <label>Email</label>
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <p style={{ color: "red" }}>{error}</p>

      <button onClick={sendOtp}>
        Send OTP
      </button>

        {showOtpBox && (
        <div>
          <br />
          <br />

          <label>Enter OTP</label>

          <br />

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <br />
          <br />

          <button onClick={verifyOtp}>
            Verify OTP
          </button>
        </div>
      )}
    </div>
  );
}

export default Register;