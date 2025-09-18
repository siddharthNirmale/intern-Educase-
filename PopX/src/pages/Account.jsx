import React from "react";

function Account() {
  return (
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
  );
}

export default Account;
