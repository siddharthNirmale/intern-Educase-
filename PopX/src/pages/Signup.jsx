import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [agency, setAgency] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !password || !agency) {
      setError("Please fill all required fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((u) => u.email === email)) {
      setError("Email already registered");
      return;
    }

    const newUser = { name, phone, email, password, company, agency };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    navigate("/account");
  };

  return (
    <div className="text-left  mt-[40px]">
      <div className="text-2xl font-semibold text-[#1D2226] mb-[14px] tracking-wide pb-[22px]">
        <p>Create your <br /> PopX account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 w-[325px] ">
        <div className="">
          <label className="block text-sm font-semibold text-violet-700 absolute bg-[#F7F8F9] px-2 -mt-[7px] ml-2 z-10">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter full name"
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none border-gray-300 focus:ring-2 focus:ring-violet-600 placeholder:text-gray-400 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-violet-700 absolute bg-[#F7F8F9] px-2 -mt-[7px] ml-2 z-10">
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none border-gray-300 focus:ring-2 focus:ring-violet-600 placeholder:text-gray-400 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-violet-700 absolute bg-[#F7F8F9] px-2 -mt-[7px] ml-2 z-10">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none border-gray-300 focus:ring-2 focus:ring-violet-600 placeholder:text-gray-400 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-violet-700 absolute bg-[#F7F8F9] px-2 -mt-[7px] ml-2 z-10">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none border-gray-300 focus:ring-2 focus:ring-violet-600 placeholder:text-gray-400 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-violet-700 absolute bg-[#F7F8F9] px-2 -mt-[7px] ml-2 z-10">
            Company name
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter company name"
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none border-gray-300 focus:ring-2 focus:ring-violet-600 placeholder:text-gray-400 text-sm"
          />
        </div>

        <div className="relative min-h-[270px]">
          <p className="text-sm font-semibold text-gray-700 mb-2">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={agency === "yes"}
                onChange={(e) => setAgency(e.target.value)}
                className="text-violet-600 accent-violet-600 h-6 w-6 cursor-pointer"
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={agency === "no"}
                onChange={(e) => setAgency(e.target.value)}
                className="text-violet-600 accent-violet-600 h-6 w-6 cursor-pointer"
              />
              No
            </label>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-semibold align-middle transition cursor-pointer bottom"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;
