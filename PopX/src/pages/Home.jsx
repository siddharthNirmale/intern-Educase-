import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  return (
      
      <div >
        <div className="flex flex-col items-start justify-end text-center h-[75vh]  ">
          <h1 className="heading text-2xl font-bold text-[#1D2226] mb-[10px]">Welcome to PopX</h1>
          <p className="para text-gray-500 text-md mb-[29px] text-left">
            Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit,
          </p>
        </div>
        
        <div className="space-y-2 w-5px mx-auto">
          <button
            onClick={() => navigate('/signup')}
            className="w-full py-3 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-semibold transition cursor-pointer"
          >
            Create Account
          </button>
          
          <button
            onClick={() => navigate('/login')}
            className="w-full py-3 rounded-md bg-[#6C25FF4B] text-[#1D2226] font-bold hover:bg-purple-300 transition cursor-pointer text-opacity-80"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    
  );
};

export default Home;