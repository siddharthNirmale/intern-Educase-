import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/account");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="text-left px-[25px] mt-[40px]">
      <h1 className="text-2xl font-semibold text-[#1D2226] mb-[14px] tracking-wide">
        Signin to your <br /> PopX account
      </h1>
      <h1 className="text-gray-500 text-lg mb-6 justify-left">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit
      </h1>
      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <label className="block text-sm font-semibold text-violet-700 absolute bg-[#F7F8F9] px-2 -mt-[7px] ml-2 z-10">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none border-gray-300 focus:ring-2 focus:ring-violet-600 placeholder:text-gray-400 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-violet-700 absolute bg-[#F7F8F9] px-2 -mt-[7px] ml-2 z-10">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none border-gray-300 focus:ring-2 focus:ring-violet-600 placeholder:text-gray-400 text-sm"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-gray-300 hover:bg-violet-700 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
