import React from "react";
import CurrencyFormat from "react-currency-format";
import amazon_prime from "../../Utils/Images/amazon-prime.png";
const SelectProductCart = ({
  id,
  imgUrl,
  title,
  price,
  products,
  setProduct,
}) => {
  return (
    <div className="my-3 flex items-center">
      <img className="h-44 w-32 object-contain mx-6" src={imgUrl} alt="image" />
      <div className="">
        <h1 className="font-medium text-lg">{title}</h1>

        <p className="text-[#408080] text-sm">In Stock</p>
        <img className="h-6 my-1 ml-0 pl-0" src={amazon_prime} alt="image" />

        <div className="flex">
          <button
            onClick={() => {
              setProduct(products.filter((element) => element.id !== id));
            }}
            className="mx-2 rounded py-1 bg-[#f4cf2c] px-5 font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="self-start text-xl font-bold">
        <CurrencyFormat
          renderText={(value) => <div className="p-4 pr-0">{value}</div>}
          decimalScale={2}
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix="₹"
        />
      </div>
    </div>
  );
};

export default SelectProductCart;
