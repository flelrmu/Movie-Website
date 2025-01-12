import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function AuthLayouts(props) {
  const { children } = props;
  return (
    <div>
      <div className="flex justify-start items-center px-10 pt-5">
        <button
          className={`px-6 py-3.5 rounded-lg justify-start items-center gap-1 inline-flex text-white text-sm font-semibold leading-[21px]`}
        >
          <div className="w-6 h-6 relative">
            <IoIosArrowBack className="w-full h-full" />
          </div>
          <Link to="/Movie-Website/home">Back</Link>
        </button>
      </div>
      <div className="flex justify-center mt-20">
        <div className="w-full max-w-xs">
          <h1 className="text-5xl mb-5 text-white font-bold">Login</h1>
          <p className="font-medium text-[#999999] mb-8">
            Welcome, please enter your details
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayouts;
