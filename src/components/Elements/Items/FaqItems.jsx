import React from "react";

function FaqItems(props) {
    const{children} = props
  return (
      <div className="p-[15px] bg-[#1e1e1e] rounded-lg border border-neutral-800 flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="text-white text-base font-semibold">
          {children}
        </div>
      </div>
  );
}

export default FaqItems;
