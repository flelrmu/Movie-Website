import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignRight } from "react-icons/fi";
import Logo from "../Elements/Logo/Logo";
import IconNavbar from "../Elements/Logo/IconNavbar";
import NavItem from "../Elements/Items/NavItem";

function Navbar(props) {
  const { type } = props;
  const [toggle, setToggle] = useState(false);

  return (
    <div className="z-50 fixed w-full my-[29px] md:my-[10px] h-[80px] md:px-10 px-5 py-6 justify-between items-center inline-flex">
      <div className="fixed">
        <Link
          to="/Movie-Website/home"
          className="w-[120px] h-[60px] justify-start items-center gap-[3px] inline-flex"
        >
          <Logo />
        </Link>
      </div>

      <div className="xl:flex justify-center items-center hidden flex-grow">
        <div className="px-[8px] py-2 bg-[#0f0f0f] rounded-[10px] border-2 border-[#1e1e1e] justify-center items-center flex">
          <Navigation type={type} />
        </div>
      </div>
      <div className="xl:flex absolute xl:right-[40px] hidden">
        <IconNavbar />
      </div>

      <div className="xl:hidden flex justify-between items-center w-full">
        <div className="bg-[#1a1a1a] ml-auto px-[12px] py-[12px] rounded-md border-2 border-neutral-800  ">
          <div className="">
            <FiAlignRight
              className="text-3xl cursor-pointer text-white"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>
        {toggle && (
          <div className="absolute text-end justify-end items-end cursor-pointer mr-[20px] rounded-lg top-20 right-0  bg-[#0f0f0f] z-50  flex flex-col px-5 py-5">
            <Navigation type={type} />
            <div className="text-sm font-normal text-[#bfbfbf] mr-[10px]">
              <p className="pt-[11px] pb-[22px]">Search</p>
              <p>Notifications</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const Navigation = ({ type }) => {
  if (type === "home") {
    return <NavItem />;
  } else if (type === "movies") {
    return <NavItem />;
  } else if (type === "support") {
    return <NavItem />;
  } else {
    return <NavItem />;
  }
};

export default Navbar;
