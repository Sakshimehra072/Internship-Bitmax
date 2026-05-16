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


  <div className="w-screen min-h-screen flex items-center justify-center bg-slate-50 p-6">

  <div className="w-full max-w-md rounded-2xl bg-gray-200 p-8 shadow-xl shadow-slate-100 border border-slate-100 flex flex-col gap-y-6">

    <div className="text-center">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-indigo-900 tracking-tight">
        Sign Up
      </h1>

      <p className="text-sm text-slate-500 mt-4">
        Please fill in your details to create an account.
      </p>
    </div>

    <div className="flex flex-col gap-y-4">

      {/* Name */}
      <div className="flex flex-col gap-y-1.5">
        <label className="text-sm font-medium text-slate-700">
          Name
        </label>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-y-1.5">
        <label className="text-sm font-medium text-slate-700">
          Phone Number
        </label>

        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-y-1.5">
        <label className="text-sm font-medium text-slate-700">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all"
        />
      </div>

    </div>

    {/* Send OTP Button */}
    <button
      onClick={sendEmailOtp}
      className="w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-100 active:scale-[0.98] transition-all"
    >
      Send Email OTP
    </button>

    {/* OTP Box */}
    {showEmailOtpBox && (
      <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 flex flex-col gap-y-4">

        <div className="flex flex-col gap-y-1.5">
          <label className="text-sm font-medium text-slate-700">
            Enter Email OTP
          </label>

          <input
            type="text"
            placeholder="Enter Email OTP"
            value={emailOtp}
            onChange={(e) => setEmailOtp(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-100 transition-all"
          />
        </div>

        <button
          onClick={verifyEmailOtp}
          className="w-full rounded-lg bg-purple-600 py-2.5 text-sm font-semibold text-white shadow-md shadow-purple-100 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-100 active:scale-[0.98] transition-all"
        >
          Verify Email OTP
        </button>

      </div>
    )}

    {/* Error */}
    {error && (
      <p className="text-sm font-medium text-red-500 bg-red-50 rounded-lg p-3 border border-red-100 text-center">
        {error}
      </p>
    )}

  </div>

</div>

  );

}

export default Register;