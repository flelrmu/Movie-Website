import React from "react";

function Button2(props) {
  const {
    children,
    variant = "bg-[#e50000]",
    onClick = () => {},
    type = "Button",
  } = props;
  return (
    <button
      className={`px-5 py-3.5 ${variant} rounded-md justify-start items-center gap-2.5 flex text-white text-sm font-semibold leading-[21px]`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

export default Button2;
