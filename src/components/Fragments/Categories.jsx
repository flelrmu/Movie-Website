import React from "react";
import ContainerDescriptions from "../Elements/Items/containerDescriptions";
import ContainerTitle from "../Elements/Items/ContainerTitle";
import Genres from "../Elements/Items/Genres";
import ArrowButton from "../Elements/Button/ArrowButton";

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
        <ArrowButton />
      </div>
      <Genres />
    </div>
  );
}

export default Categories;
