import React, { useState, useEffect } from "react";
import camera from "../assets/Camera.svg";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";

function Account() {
  const [profilePhoto, setProfilePhoto] = useState(profile);
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser({ name: currentUser.name, email: currentUser.email });
    }
  }, []);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      className="text-left"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl text-gray-900 bg-white p-4 pt-5">Account Settings</h1>

      <div className="p-4 flex items-center space-x-4">
        <div className="relative w-16 h-16">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <label
            htmlFor="photo-upload"
            className="absolute bottom-0 right-0 bg-white rounded-full cursor-pointer"
          >
            <img src={camera} alt="Camera" className="w-4 h-4" />
          </label>
          <input
            type="file"
            id="photo-upload"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />
        </div>

        <div>
          <p className="font-bold text-gray-800">{user.name}</p>
          <p className="text-gray-600 text-sm">{user.email}</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed px-4 border-dotted pb-4 border-b border-gray-300">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
        Erat, Sed Diam
      </p>
    </motion.div>
  );
}

export default Account;
