import React from "react";

function FaqText(props) {
    const {children} = props
  return (
    <>
      <div className="grow shrink basis-0 text-white text-xl font-medium leading-[30px]">
        {children}
      </div>
      <div className="w-6 h-6 relative">
        <img src="images/plus.svg" alt="" />
      </div>
    </>
  );
}

export default FaqText;
