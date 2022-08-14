import React, { useContext } from "react";
import CurrencyFormat from "react-currency-format";
import SelectProductCart from "./SelectProductCart";
import { ProductContext } from "../../Context/ProductState";

import FlipMove from "react-flip-move";

const Cart = () => {
  const productData = useContext(ProductContext);
  let totalAmount = 0;
  productData.products.map((element) => {
    totalAmount += element.price;
  });
  return (
    <div>
      {/* ad */}
      <div className="h-14 bg-green-200 m-4 mb-0"></div>

      <div className="flex p-4">
        <div className="flex flex-col bg-white p-4 pl-7 w-full">
          <h1 className="text-xl font-semibold">
            Hi, {productData.authUser ? productData.authUser.email : "Guest"}
          </h1>
          <h1 className="text-2xl font-semibold mb-0">Shoping Carts</h1>
          <p
            onClick={() => {
              productData.setProduct([]);
            }}
            className="text-blue-400 cursor-pointer mb-0"
          >
            deselect all items
          </p>
          {productData.products.length > 0 && (
            <p className="mt-0 self-end text-sm">Price</p>
          )}
          <hr />
          {/* list of selected items */}


            {productData.products.map((element,i,arr) => (
              <SelectProductCart
              id={element.id}
              imgUrl={element.imgUrl}
              title={element.title}
              price={element.price}
              products={productData.products}
              setProduct={productData.setProduct}
              key={i+element.id}
              />
              )
              )}
        </div>

        <div className="bg-white mx-5 flex flex-col justify-evenly w-96 h-40 ">
          <CurrencyFormat
            renderText={(value) => (
              <div className="p-4">
                <h1 className="text-xl font-medium">
                  {`Subtotal (${productData.products.length} items): `}
                  <strong>{`${value}`}</strong>
                </h1>
                <small className="flex items-center">
                  <input className="mr-1" type="checkbox" />
                  <span>This order contains</span>a gift
                </small>
              </div>
            )}
            decimalScale={2}
            value={totalAmount}
            displayType="text"
            thousandSeparator={true}
            prefix="₹"
          />
          <button className="bg-[#e8c00c] hover:bg-[#be9e0df6] text-sm mx-3 py-1 font-medium mb-5 rounded">
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
