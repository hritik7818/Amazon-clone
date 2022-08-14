import React from "react";

const ProductCard = ({ title, imageUrl }) => {
  return (
    <div className="p-5 m-3 flex flex-col z-10 w-full max-w-[300px] max-h-[400px] bg-white">
      <div className="text-xl font-bold">{title}</div>
      <div className="my-3">
        <img className="h-64 w-full" src={imageUrl} alt="product" />
      </div>
      <a className="text-[14px] font-semibold text-[#007185]">See all deals</a>
    </div>
  );
};

export default ProductCard;
