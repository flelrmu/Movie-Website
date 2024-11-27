import React from "react";

function ArrowButton() {
  return (
    <div className="p-3 bg-[#0f0f0f] rounded-[10px] border border-[#1e1e1e] justify-start items-center gap-3 flex">
      <div className="p-2.5 bg-[#1a1a1a] rounded-md border border-[#1e1e1e] justify-start items-start gap-2.5 flex">
        <div className="w-6 h-6 relative">
          <img src="images/left.svg" alt="" />
        </div>
      </div>
      <div className="h-1 justify-start items-start gap-[3px] flex">
        <div className="w-[18px] h-1 bg-[#e50000] rounded-[100px]" />
        <div className="w-[14px]  h-1 bg-[#333333] rounded-[100px]" />
        <div className="w-[14px] h-1 bg-[#333333] rounded-[100px]" />
        <div className="w-[14px] h-1 bg-[#333333] rounded-[100px]" />
      </div>
      <div className="p-2.5 bg-[#1a1a1a] rounded-md border border-[#1e1e1e] justify-start items-start gap-2.5 flex">
        <div className="w-6 h-6 relative">
          <img src="images/right.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ArrowButton;
