import React from "react";

function Input(props) {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm border rounded py-2 px-3 text-slate-700 placeholder:opacity-50 w-full"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
}

export default Input
