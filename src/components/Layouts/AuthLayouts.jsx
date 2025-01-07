import React from "react";

function AuthLayouts(props) {
  const { children } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-5xl mb-5 text-white font-bold">Login</h1>
        <p className="font-medium text-[#999999] mb-8">
          Welcome, please enter your details
        </p>
        {children}
      </div>
    </div>
  );
}

export default AuthLayouts;
