import React from "react";
import ContainerDescriptions from "../Elements/Items/containerDescriptions";
import ContainerTitle from "../Elements/Items/ContainerTitle";
import Genres from "../Elements/Items/Genres";

function Categories() {

  return (
    <div className="h-[418px] w-full px-10 top-[970px] absolute flex-col justify-start items-start gap-[60px] inline-flex">
      <div className="self-stretch justify-start items-end gap-20 inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
          <ContainerTitle>
            Explore our wide variety of categories
          </ContainerTitle>
          <ContainerDescriptions>
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </ContainerDescriptions>
        </div>
        <div className="p-3 bg-[#0f0f0f] rounded-[10px] border border-[#1e1e1e] justify-start items-center gap-3 flex">
          <div className="p-2.5 bg-[#1a1a1a] rounded-md border border-[#1e1e1e] justify-start items-start gap-2.5 flex">
            <div className="w-6 h-6 relative">
              <img src="/images/left.svg" alt="" />
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
              <img src="/images/right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Genres />
    </div>
  );
}

export default Categories;
