import React from "react";

const items = [
  {
    id: 1,
    title: "Home",
    links: ["Categories", "Devices", "Pricing", "FAQ"],
  },
  {
    id: 2,
    title: "Movies",
    links: ["Genres", "Trending", "New Release", "Popular"],
  },
  {
    id: 3,
    title: "Shows",
    links: ["Genres", "Trending", "New Release", "Popular"],
  },
  {
    id: 4,
    title: "Support",
    links: ["Contact Us"],
  },
  {
    id: 5,
    title: "Subscription",
    links: ["Plans", "Features"],
  },
];

function Footer() {
  return (
    <div className="w-full absolute top-[3947px] h-[414px] px-20 pt-20 pb-10 bg-[#0f0f0f] flex-col justify-start items-start gap-20 inline-flex">
      <div className="self-stretch justify-start items-start gap-5 grid grid-cols-6 grid-rows-1">
        {items.map((item) => (
          <div
            key={item.id}
            className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex"
          >
            <div className="self-stretch text-white text-lg font-semibold font-['Manrope'] leading-[27px]">
              {item.title}
            </div>
            <div className="self-stretch h-[126px] flex-col justify-start items-start gap-2.5 flex">
              <div className="self-stretch text-[#999999] text-base font-medium font-['Manrope'] leading-normal">
                {item.links[0]}
              </div>
              <div className="self-stretch text-[#999999] text-base font-medium font-['Manrope'] leading-normal">
                {item.links[1]}
              </div>
              <div className="self-stretch text-[#999999] text-base font-medium font-['Manrope'] leading-normal">
                {item.links[2]}
              </div>
              <div className="self-stretch text-[#999999] text-base font-medium font-['Manrope'] leading-normal">
                {item.links[3]}
              </div>
            </div>
          </div>
        ))}

        <div className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
          <div className="self-stretch text-white text-lg font-semibold font-['Manrope'] leading-[27px]">
            Connect With Us
          </div>
          <div className="justify-start items-start gap-2.5 inline-flex">
            <div className="p-3 bg-[#1a1a1a] rounded-md border border-neutral-800 justify-start items-start gap-2.5 flex">
              <div className="w-5 h-5 relative">
                <img src="/images/facebook.svg" alt="" />
              </div>
            </div>
            <div className="p-3 bg-[#1a1a1a] rounded-md border border-neutral-800 justify-start items-start gap-2.5 flex">
              <div className="w-5 h-5 relative">
                <img src="/images/x.svg" alt="" />
              </div>
            </div>
            <div className="p-3 bg-[#1a1a1a] rounded-md border border-neutral-800 justify-start items-start gap-2.5 flex">
              <div className="w-5 h-5 relative">
                <img src="/images/Linkedin.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[41px] flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch h-[0px] border border-neutral-800" />
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="text-[#999999] text-sm font-normal font-['Manrope'] leading-[21px]">
            @2023 streamvib, All Rights Reserved
          </div>
          <div className="justify-start items-start gap-4 flex">
            <div className="text-[#999999] text-sm font-normal font-['Manrope'] leading-[21px]">
              Terms of Use
            </div>
            <div className="w-[0px] h-[21px] origin-top-left border border-neutral-800" />
            <div className="text-[#999999] text-sm font-normal font-['Manrope'] leading-[21px]">
              Privacy Policy
            </div>
            <div className="w-[0px] h-[21px] origin-top-left border border-neutral-800" />
            <div className="text-[#999999] text-sm font-normal font-['Manrope'] leading-[21px]">
              Cookie Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
