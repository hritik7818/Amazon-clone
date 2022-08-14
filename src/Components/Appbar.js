import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import banner from "../Utils/Images/amazon_prime_banner.png";
const Appbar = () => {
  let lists = [
    "All",
    "Fresh",
    "Car & Motorbike",
    "Baby",
    "Gift Cards",
    "Fashion",
    "Buy Again",
    "Toys & Games",
    "Gift Ideas",
    "Health, Household & Personal Care",
    "Pet",
  ];

  return (
    <div className="container mx-auto h-9 flex justify-between text-xs items-center font-semibold bg-[#232F3E] text-white">
      {lists.map((element,i) => {
        if (element === "All") {
          return (
            <div key={i} className="flex items-center cursor-pointer ml-5 my-2 hover:border hover:border-white">
              <MenuIcon />
              <span>All</span>
            </div>
          );
        }
        return (
          <div key={i} className="p-1 cursor-pointer hover:border hover:border-white">
            {element}
          </div>
        );
      })}
      <img
        className="hover:border hover:border-white cursor-pointer h-7 w-[15%] ml-5"
        src={banner}
        alt="banner"
      />
    </div>
  );
};

export default Appbar;
