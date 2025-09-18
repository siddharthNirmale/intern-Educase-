import React from "react";

function Login() {
  return (
    <div className="text-left">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Sign in to your PopX account
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-violet-700">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-violet-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-violet-600 hover:bg-violet-700 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
