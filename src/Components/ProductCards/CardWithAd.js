import React from "react";

const CardWithAd = ({ title, imageUrl, adUrl }) => {
  return (
    <div className="w-full m-3 max-w-[300px] max-h-[500px] z-10">
      <div className="bg-white p-5 mb-6  z-10 ">
        <div className="flex items-end">
          <div className="">
            <div className="mb-2 text-xl font-bold">{title}</div>
            <a className=" text-[14px] font-semibold text-[#007185]">
              Register now
            </a>
          </div>
          <img className="w-1/3 h-20" src={imageUrl} alt="image" />
        </div>
      </div>
      <div className="z-10">
        <img className="h-[220px] w-full" src={adUrl} alt="ad" />
      </div>
    </div>
  );
};

export default CardWithAd;
