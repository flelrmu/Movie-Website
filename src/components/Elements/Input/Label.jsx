import React from 'react'

function Label(props) {
  const {htmlFor, children} = props;
  return (
      <label
      htmlFor={htmlFor}
      className="text-[#bfbfbf] block text-sm font-bold mb-2"
    >
      {children}
    </label>
  )
}

export default Label