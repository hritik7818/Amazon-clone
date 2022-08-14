import React from "react";

const MultiElementProductCard = ({ title, imageUrls, descriptions }) => {
  return (
    <div className="p-5 m-3 flex flex-col z-10 w-full max-w-[300px] max-h-[400px] bg-white">
      <div className="text-xl font-bold">{title}</div>
      <div className="my-3 grid grid-cols-2 gap-x-3 gap-y-3  mb-auto">
        {imageUrls.map((imageUrl, index) => {
          return (
            <div key={index} className="">
              <img className="h-20 px-1" src={imageUrl} alt="image" />
              <p className="text-xs ml-1 font-medium">{descriptions[index]}</p>
            </div>
          );
        })}
      </div>
      <div className="flex">
        <a className="mt-auto text-[14px] font-semibold text-[#007185] ">
          See all deals
        </a>
      </div>
    </div>
  );
};

export default MultiElementProductCard;
