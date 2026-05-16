// import { useState } from "react";
// import axios from "axios";

// function Register() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");

//   const [error, setError] = useState("");
//   const [showOtpBox, setShowOtpBox] = useState(false);

//   const sendOtp = async () => {
//     if (name.trim() === "") {
//       setError("Name is required");
//       return;
//     }

//     if (!email.includes("@") || !email.includes(".")) {
//       setError("Enter valid email");
//       return;
//     }

//     setError("");

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/otp/send",
//         {
//           phone,
//         }
//       );

//       alert(res.data.message);

//       setShowOtpBox(true);
//     } catch (error) {
//       setError("Failed to send OTP");
//     }
//   };

//   const verifyOtp = async () => {
//     if (otp.trim() === "") {
//       setError("Enter OTP");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/otp/verify",
//         {
//           phone,
//           otp,
//         }
//       );

//       alert(res.data.message);

//       setName("");
//       setPhone("");
//       setEmail("");
//       setOtp("");
//       setShowOtpBox(false);
//       setError("");
//     } catch (error) {
//       setError("OTP Verification Failed");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Registration Page</h1>

//       <label>Name</label>
//       <br />

//       <input
//         type="text"
//         placeholder="Enter Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <br />
//       <br />

//       <label>Phone Number</label>
//       <br />

//       <input
//         type="text"
//         placeholder="Enter Phone Number"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />

//       <br />
//       <br />

//       <label>Email</label>
//       <br />

//       <input
//         type="email"
//         placeholder="Enter Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <br />
//       <br />

//       <p style={{ color: "red" }}>{error}</p>

//       <button onClick={sendOtp}>
//         Send OTP
//       </button>

//         {showOtpBox && (
//         <div>
//           <br />
//           <br />

//           <label>Enter OTP</label>

//           <br />

//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//           />

//           <br />
//           <br />

//           <button onClick={verifyOtp}>
//             Verify OTP
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Register;







import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailOtp, setEmailOtp] = useState("");

  const [error, setError] = useState("");
  const [showEmailOtpBox, setShowEmailOtpBox] = useState(false);

  // SEND EMAIL OTP
  const sendEmailOtp = async () => {
    if (name.trim() === "") {
      setError("Name is required");
      return;
    }

    if (phone.trim() === "") {
      setError("Phone number is required");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Enter valid email");
      return;
    }

    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      alert(data.message);

      setShowEmailOtpBox(true);
    } catch (error) {
      setError("Failed to send Email OTP");
    }
  };

  // VERIFY EMAIL OTP
  const verifyEmailOtp = async () => {
    if (emailOtp.trim() === "") {
      setError("Enter Email OTP");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp: emailOtp,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      setName("");
      setPhone("");
      setEmail("");
      setEmailOtp("");
      setShowEmailOtpBox(false);
      setError("");
    } catch (error) {
      setError("Email OTP Verification Failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Registration Page</h1>

      {/* NAME */}
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

      {/* PHONE */}
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

      {/* EMAIL */}
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

      <button onClick={sendEmailOtp}>
        Send Email OTP
      </button>

      {/* EMAIL OTP BOX */}
      {showEmailOtpBox && (
        <div>
          <br />

          <label>Enter Email OTP</label>

          <br />

          <input
            type="text"
            placeholder="Enter Email OTP"
            value={emailOtp}
            onChange={(e) => setEmailOtp(e.target.value)}
          />

          <br />
          <br />

          <button onClick={verifyEmailOtp}>
            Verify Email OTP
          </button>
        </div>
      )}

      <br />

      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}

export default Register;