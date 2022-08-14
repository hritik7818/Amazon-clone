import React, { useContext } from "react";
import logo from "../Utils/Images/amazon_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/ProductState";
import { auth } from "../firebase";

const Header = () => {
  const productData = useContext(ProductContext);
  const handleToggleLogin = () => {
    if (productData.authUser) {
      auth.signOut();
    }
  };

  return (
    <>
      {/* view for small devices */}
      <div className="visible container mx-auto sticky top-0 z-20 bg-[#131921] h-12 flex items-center text-white">
        <div className="flex justify-between">
          <Link to="/">
            <img
              className="p-1 object-contain h-7 mx-3 hover:border hover:border-white"
              src={logo}
              alt="logo"
            />
          </Link>
          <div className="">
            <Link to={!productData.authUser && "/login"}>
              <div
                onClick={handleToggleLogin}
                className="p-1 flex flex-col mx-1 hover:border hover:border-white"
              >
                <span className="text-xs font-medium">
                  Hello,
                  {productData.authUser ? productData.authUser.email : "Guest"}
                </span>
                <span className="text-sm font-bold">
                  {productData.authUser ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>
            <div className="p-1 text-xl flex items-center mx-1 hover:border hover:border-white">
              <Link to="/carts">
                <ShoppingCartIcon />
                <span className="mx-2 text-xl text-[#f08804] font-semibold">
                  {productData.products.length}
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="p-1 flex flex-col mx-5 hover:border hover:border-white">
          <span className="text-xs font-medium">Hello</span>
          <span className="text-sm font-bold">Search your address</span>
        </div>
        <div className="mr-5 flex flex-1 rounded">
          <input
            className="outline-none text-black h-7 w-full p-3"
            type="text"
          />
          <SearchIcon className="cursor-pointer border-none p-0.5 !h-7 !w-7 text-xs bg-orange-400" />
        </div>
        <div className="flex justify-evenly">
          <div className="p-1 flex flex-col mx-1 hover:border hover:border-white">
            <span className="text-xs font-medium">Return</span>
            <span className="text-sm font-bold">& Order</span>
          </div>
          <div className="p-1 flex flex-col mx-1 hover:border hover:border-white">
            <span className="text-xs font-medium">Your</span>
            <span className="text-sm font-bold">& Prime</span>
          </div>
        </div>
      </div>
      {/* view for large devices  */}
      <div className="hidden container mx-auto sticky top-0 z-20 bg-[#131921] h-12 flex items-center text-white">
        <Link to="/">
          <img
            className="p-1 object-contain h-7 mx-3 hover:border hover:border-white"
            src={logo}
            alt="logo"
          />
        </Link>
        <div className="p-1 flex flex-col mx-5 hover:border hover:border-white">
          <span className="text-xs font-medium">Hello</span>
          <span className="text-sm font-bold">Search your address</span>
        </div>
        <div className="mr-5 flex flex-1 rounded">
          <input
            className="outline-none text-black h-7 w-full p-3"
            type="text"
          />
          <SearchIcon className="cursor-pointer border-none p-0.5 !h-7 !w-7 text-xs bg-orange-400" />
        </div>
        <div className="flex justify-evenly">
          <Link to={!productData.authUser && "/login"}>
            <div
              onClick={handleToggleLogin}
              className="p-1 flex flex-col mx-1 hover:border hover:border-white"
            >
              <span className="text-xs font-medium">
                Hello,{" "}
                {productData.authUser ? productData.authUser.email : "Guest"}
              </span>
              <span className="text-sm font-bold">
                {productData.authUser ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <div className="p-1 flex flex-col mx-1 hover:border hover:border-white">
            <span className="text-xs font-medium">Return</span>
            <span className="text-sm font-bold">& Order</span>
          </div>
          <div className="p-1 flex flex-col mx-1 hover:border hover:border-white">
            <span className="text-xs font-medium">Your</span>
            <span className="text-sm font-bold">& Prime</span>
          </div>
          <div className="p-1 text-xl flex items-center mx-1 hover:border hover:border-white">
            <Link to="/carts">
              <ShoppingCartIcon />
              <span className="mx-2 text-xl text-[#f08804] font-semibold">
                {productData.products.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
