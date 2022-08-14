import React, { useContext } from "react";
import CurrencyFormat from "react-currency-format";
import { ProductContext } from "../../Context/ProductState";
import shortid from "shortid";

const LongCard = ({ title, products }) => {
  let productData = useContext(ProductContext);
  return (
    <div className="pb-7 w-full px-7">
      <div className="bg-white p-4">
        <div className="mb-5 ml-5 text-2xl font-bold">{title}</div>
        <div className="flex">
          {products.map((element ,i) => {
            return (
              <div key={i} className="flex-1 w-1/4 mx-4 flex flex-col justify-evenly">
                <div className="flex flex-1 items-center justify-center">
                  <img
                    className="cursor-pointer mb-2 h-44"
                    src={element.imgUrl}
                    alt="image"
                  />
                </div>
                <div className="flex mt-auto text-xs">
                  <button
                    disabled
                    className="p-1 font-bold bg-[#CC0C39] text-white"
                  >
                    {element.offPercent !== ""
                      ? `Up to ${element.offPercent}% off`
                      : "Deal of the Day"}
                  </button>
                  <button
                    onClick={() => {
                      productData.setProduct([
                        ...productData.products,
                        {
                          imgUrl: element.imgUrl,
                          price: element.price,
                          title: element.title,
                          id: shortid.generate(),
                        },
                      ]);
                    }}
                    className="p-1 hover:bg-red-600 hover:text-white cursor-pointer mx-2  font-bold text-[#CC0C39]"
                  >
                    Add to cart
                  </button>
                  <CurrencyFormat
                    renderText={(value) => (
                      <div className="p-1 font-semibold text-lg">{value}</div>
                    )}
                    decimalScale={2}
                    value={element.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix="₹"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LongCard;
