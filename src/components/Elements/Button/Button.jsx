import React from "react";

function Button(props) {
  const {
    children,
    variant = "bg-[#e50000]",
    onClick = () => {},
    type = "Button",
  } = props;
  return (
    <button
      className={`px-6 py-3.5 ${variant} rounded-lg justify-start items-center gap-1 inline-flex text-white text-sm font-semibold font-['Manrope'] leading-[21px]`}
      type={type}
      onClick={() => onClick()}
    >
      <div className="w-6 h-6 relative">
        <img src="/images/play.svg" alt="" />
      </div>
      {children}
    </button>
  );
}

export default Button;
