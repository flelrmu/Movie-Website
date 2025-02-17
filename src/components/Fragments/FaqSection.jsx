import React from "react";
import FaqItems from "../Elements/Items/FaqItems";
import FaqText from "../Elements/Items/FaqText";
import ContainerDescriptions from "../Elements/Items/containerDescriptions";
import ContainerTitle from "../Elements/Items/ContainerTitle";
import Button2 from "../Elements/Button/Button2";

function FaqSection() {
  return (
    <div className="w-full px-10 mb-[120px] h-auto flex-col justify-start items-center gap-[60px] inline-flex">
      <div className="self-stretch justify-start items-end gap-20 inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
          <ContainerTitle>Frequently Asked Questions</ContainerTitle>
          <ContainerDescriptions>
            {" "}
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </ContainerDescriptions>
        </div>
        <Button2 variant="bg-[#e50000]">Ask a Question</Button2>
      </div>
      <div className="self-stretch justify-start items-start gap-10 inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
          <div className="self-stretch p-6 justify-start items-start gap-4 inline-flex">
            <FaqItems>01</FaqItems>
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-3.5 inline-flex">
              <div className="self-stretch text-white text-xl font-medium leading-[30px]">
                What is StreamVibe?
              </div>
              <div className="self-stretch text-[#999999] text-base font-normal leading-normal">
                StreamVibe is a streaming service that allows you to watch
                movies and shows on demand.
              </div>
            </div>
            <div className="w-6 h-6 relative">
              <img src="images/min.svg" alt="" />
            </div>
          </div>
          <div className="self-stretch h-[1px] bg-gradient-to-r from-transparent via-[#e50000] via-[30%] to-transparent to-[100%]" />
          <div className="self-stretch p-6 justify-start items-center gap-4 inline-flex">
            <FaqItems>02</FaqItems>
            <FaqText>How much does StreamVibe cost?</FaqText>
          </div>
          <div className="self-stretch h-[1px] bg-gradient-to-r from-transparent via-[#e50000] via-[30%] to-transparent to-[100%]" />
          <div className="self-stretch p-6 justify-start items-center gap-4 inline-flex">
            <FaqItems>03</FaqItems>
            <FaqText>What content is available on StreamVibe?</FaqText>
          </div>
          <div className="self-stretch h-[1px] bg-gradient-to-r from-transparent via-[#e50000] via-[30%] to-transparent to-[100%]" />
          <div className="self-stretch p-6 justify-start items-center gap-4 inline-flex">
            <FaqItems>04</FaqItems>
            <FaqText>How can I watch StreamVibe?</FaqText>
          </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
          <div className="self-stretch p-6 justify-start items-center gap-4 inline-flex">
            <FaqItems>05</FaqItems>
            <FaqText>How do I sign up for StreamVibe?</FaqText>
          </div>
          <div className="self-stretch h-[1px] bg-gradient-to-r from-transparent via-[#e50000] via-[30%] to-transparent to-[100%]" />
          <div className="self-stretch p-6 justify-start items-center gap-4 inline-flex">
            <FaqItems>06</FaqItems>
            <FaqText>What is the StreamVibe free trial?</FaqText>
          </div>
          <div className="self-stretch h-[1px] bg-gradient-to-r from-transparent via-[#e50000] via-[30%] to-transparent to-[100%]" />
          <div className="self-stretch p-6 justify-start items-center gap-4 inline-flex">
            <FaqItems>07</FaqItems>
            <FaqText>How do I contact StreamVibe customer support?</FaqText>
          </div>
          <div className="self-stretch h-[1px] bg-gradient-to-r from-transparent via-[#e50000] via-[30%] to-transparent to-[100%]" />
          <div className="self-stretch p-6 justify-start items-center gap-4 inline-flex">
            <FaqItems>08</FaqItems>
            <FaqText>What are the StreamVibe payment methods?</FaqText>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
