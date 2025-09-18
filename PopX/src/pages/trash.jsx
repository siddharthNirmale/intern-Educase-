import React, { useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  const totalPages = 5;

  const goPrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const goNext = () => {
    if (page < totalPages) setPage(page + 1);
  };
  const goHome = () => {
    setPage(1);
  };
  const CreateAccount = () => {
    setPage(3);
  };
  const SignIn = () => {
    setPage(2);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-6">

      <div className="w-[370px] min-h-[80vh] bg-gray-50 shadow-md rounded-lg p-6 flex flex-col justify-start">


        {page === 1 && (
          <div className="relative flex flex-col justify-between h-full">

            <div className="flex justify-center mt-8">
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-yellow-500 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer">
                1
              </div>
            </div>


            <div className=" flex flex-col items-start justify-end text-center h-[70vh] ">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome to PopX
              </h1>
              <p className="text-gray-500 text-lg mb-6 text-left  ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, perferendis.
              </p>

              <div className="space-y-3">
                <button onClick={CreateAccount} className=" w-full py-3 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-semibold transition cursor-pointer">
                  Create Account
                </button>
                <button onClick={SignIn} className="w-full py-3 rounded-md bg-purple-200 text-purple-800 font-semibold hover:bg-purple-300 transition cursor-pointer">
                  Already Registered? Login
                </button>
              </div>
            </div>
          </div>
        )}

        {page === 2 && (
          <div className="text-left">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Signin to your PopX account
            </h1>
            <p className="text-gray-500 text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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
                className="w-full py-3 rounded-md  bg-violet-600 hover:bg-violet-700 text-white cursor-pointer"

              >
                Login
              </button>
            </form>
          </div>
        )}


        {page === 3 && (
          <div className="text-left">
            <h1 className=" text-2xl font-bold text-gray-900 mb-6">
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
        )}


        {page === 4 && (
          <div className="text-left">
            <h1 className="text-xl font-bold text-gray-900 mb-6">
              Account Settings
            </h1>

            <div className="bg-gray-100 p-4 rounded-md flex items-center gap-4 mb-4">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGZ-WDe0XeOOA/profile-displayphoto-scale_200_200/B56Zft88GcHcAc-/0/1752043865739?e=2147483647&v=beta&t=CXSLba-0pMWfLQWGKwkZKyBppZmzgniiRbc_Iy1z8TQ"
                alt="profile"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-bold text-gray-800">Sayan Mondal</p>
                <p className="text-gray-600 text-sm">sayandevelops@gmail.com</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
        )}


        {page === 5 && (
          <div className="flex flex-col items-center justify-center text-center h-[70vh]">
            <div className="w-20 h-20 bg-green-500 text-white flex items-center justify-center rounded-full mb-4">
              ✅
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Login Successful!
            </h1>
            <p className="text-gray-600 mb-6">
              Welcome back to your PopX account 🎉
            </p>
            <button
              onClick={() => setPage(1)}
              className="px-6 py-2 rounded-md bg-violet-600 text-white hover:bg-violet-700 transition"
            >
              Go to Home
            </button>
          </div>
        )}

      </div>



      <div className="flex items-center justify-center gap-6 pt-4  w-[370px]">

        <button onClick={goHome} className="text-gray-500 hover:text-gray-700 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75h-5.25v-6h-6v6H3.75A.75.75 0 013 21V9.75z" />
          </svg>
        </button>


        <button
          onClick={goPrev}
          className="text-gray-500 hover:text-gray-700 disabled:opacity-40 cursor-pointer"
          disabled={page === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>


        <span className="text-sm text-gray-600">
          {page} of {totalPages}
        </span>


        <button
          onClick={goNext}
          className="text-gray-500 hover:text-gray-700 disabled:opacity-40 cursor-pointer"
          disabled={page === totalPages}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;