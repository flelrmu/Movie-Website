import React from "react";

function IconNavbar() {
  return (
    <div className="justify-start gap-[30px] items-center flex">
      <img className="w-6 h-6 relative" src="/images/search.svg" alt="Search" />
      <img
        className="w-6 h-6 relative"
        src="/images/bell.svg"
        alt="Notifications"
      />
    </div>
  );
}

export default IconNavbar;
