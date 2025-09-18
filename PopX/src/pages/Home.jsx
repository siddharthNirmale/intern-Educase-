import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex items-center justify-center bg-[#F7F8F9]">
      {/* Card with motion */}
      <motion.div
        className="min-w-full m-[10px] p-0 rounded-xl flex flex-col justify-end h-[812px] pb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        {/* Heading and paragraph */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1D2226] mb-2">
            Welcome to PopX
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => navigate("/signup")}
            className="w-full py-3 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-colors duration-300"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/login")}
            className="w-full py-3 rounded-md bg-[#6C25FF4B] text-[#1D2226] font-bold hover:bg-purple-300 transition-colors duration-300"
          >
            Already Registered? Login
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
