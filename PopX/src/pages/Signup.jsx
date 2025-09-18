import React from "react";

function Signup() {
  return (
    <div className="text-left">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Create your PopX account
      </h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-violet-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-violet-700">
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter phone number"
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-violet-700">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-violet-700">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-violet-700">
            Company name
          </label>
          <input
            type="text"
            placeholder="Enter company name"
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">
            Are you an Agency? <span className="text-red-500">*</span>
          </p>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" value="yes" className="text-violet-600" />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" value="no" className="text-violet-600" />
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-semibold"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;
