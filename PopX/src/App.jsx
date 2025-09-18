import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="h-screen flex items-center justify-center  bg-white ">
        <div className="flex flex-col items-center bg-[#F7F8F9] border border-gray-200 shadow-lg w-[375px] h-[812px]
        ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
