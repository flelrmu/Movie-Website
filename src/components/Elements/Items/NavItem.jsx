import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavItem() {
  const location = useLocation();
  const [active, setActive] = useState(null);
  const handleClick = (id, link, event) => {
    event.preventDefault();
    setActive(id);
    window.location.href = link;
  };

  const item = [
    {
      id: 1,
      name: "Home",
      link: "/Movie-Website/home",
    },
    {
      id: 2,
      name: "Movies & Shows",
      link: "/Movie-Website/movies",
    },
    {
      id: 3,
      name: "Support",
      link: "/Movie-Website/support",
    },
    {
      id: 4,
      name: "Subscriptions",
      link: "/Movie-Website/subscriptions",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row">
      {item.map((item) => (
        <div
          key={item.id}
          onClick={() => handleClick(item.id, item.link)}
          className={`px-[8px] py-3 rounded-lg cursor-pointer 
            ${
              location.pathname === item.link || active === item.id
                ? "bg-[#1a1a1a] px-[20px] text-white font-medium"
                : "text-[#bfbfbf]"
            }`}
        >
          <Link
            to={item.link}
            className="text-sm font-normal block w-full h-full"
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NavItem;
