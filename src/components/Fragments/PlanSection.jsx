import React from "react";
import ContainerDescriptions from "../Elements/Items/containerDescriptions";
import ContainerTitle from "../Elements/Items/ContainerTitle";

const plans = [
  {
    id: 1,
    name: "Basic Plan",
    description: `Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.`,
    price: "$9.99",
  },
  {
    id: 2,
    name: "Standard Plan",
    description: `Access to a wider selection of movies and shows, including most new releases and exclusive content`,
    price: "$12.99",
  },
  {
    id: 3,
    name: "Premium Plan",
    description: `Access to a widest selection of movies and shows, including all new releases and Offline Viewing`,
    price: "$14.99",
  },
];

function PlanSection() {
  return (
    <div className="w-full absolute px-10 top-[2965px] h-[505px] flex-col justify-start items-start gap-[60px] inline-flex">
      <div className="self-stretch justify-start items-end gap-20 inline-flex">
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
          <ContainerTitle>Choose the plan that's right for you</ContainerTitle>
          <ContainerDescriptions>
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </ContainerDescriptions>
        </div>
        <div className="p-2 bg-[#0f0f0f] rounded-lg border border-neutral-800 justify-start items-center flex">
          <div className="px-5 py-3 bg-[#1e1e1e] rounded-md justify-center items-center gap-2.5 flex">
            <div className="text-white text-sm font-medium font-['Manrope'] leading-[21px]">
              Monthly
            </div>
          </div>
          <div className="px-5 py-3 rounded-[100px] justify-center items-center gap-2.5 flex">
            <div className="text-[#999999] text-sm font-medium font-['Manrope'] leading-[21px]">
              Yearly
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch justify-start items-start grid-cols-3 grid-rows-1 gap-5 inline-flex">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="grow shrink basis-0 p-10 bg-[#1a1a1a] rounded-[10px] border border-neutral-800 flex-col justify-start items-start gap-10 inline-flex"
          >
            <div className="self-stretch h-[114px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch text-white text-xl font-bold font-['Manrope'] leading-[30px]">
                {plan.name}
              </div>
              <div className="self-stretch text-[#999999] text-base font-normal font-['Manrope'] leading-normal">
                {plan.description}
              </div>
            </div>
            <div className="justify-center items-end gap-0.5 inline-flex">
              <div className="text-white text-3xl font-semibold font-['Manrope'] leading-6">
                {plan.price}
              </div>
              <div className="text-[#999999] text-base font-medium font-['Manrope'] leading-3">
                /month
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-3 inline-flex">
              <div className="grow shrink basis-0 h-[49px] px-5 py-3.5 bg-[#141414] rounded-md border border-neutral-800 justify-center items-center gap-2.5 flex">
                <div className="text-white text-sm font-semibold font-['Manrope'] leading-[21px]">
                  Start Free Trial
                </div>
              </div>
              <div className="grow shrink basis-0 h-[49px] px-5 py-3.5 bg-[#e50000] rounded-md justify-center items-center gap-2.5 flex">
                <div className="text-white text-sm font-semibold font-['Manrope'] leading-[21px]">
                  Choose Plan
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanSection;
