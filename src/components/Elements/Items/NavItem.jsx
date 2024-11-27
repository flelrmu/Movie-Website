import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate

function NavItem() {
  const location = useLocation();
  const navigate = useNavigate(); // Inisialisasi navigate
  const [active, setActive] = useState(null);

  const handleClick = (id, link) => {
    setActive(id); // Menandai item yang aktif
    navigate(link); // Navigasi menggunakan useNavigate
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
          onClick={() => handleClick(item.id, item.link)} // Tidak perlu event
          className={`px-[16px] py-3 rounded-lg cursor-pointer 
            ${location.pathname === item.link || active === item.id
              ? "bg-[#1a1a1a] px-[16px] text-white font-medium"
              : "text-[#bfbfbf]"
            }`}
        >
          <div className="text-sm font-normal block w-full h-full">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default NavItem;
