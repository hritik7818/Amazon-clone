import React, { useState } from "react";
import amazon from "../Utils/Images/amazon-icon.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const history=useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
          console.log(auth)
          history.push("/")
        })
        .catch(error=>alert(error.message))
  };
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // redirect to the homepage
        history.push("/");
        console.log(auth)
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="w-full flex flex-col items-center p-5 bg-white">
      <Link to="/">
        <img className="w-28" src={amazon} alt="image" />
      </Link>
      <div className="w-[315px] border border-1 mt-5 border-[#ddd] rounded p-6 h-[350px]">
        <h1 className="text-3xl font-medium">Sign-In</h1>
        <form>
          <h6 className="mt-5 text-sm font-semibold">Email</h6>
          <input
            className="border mt-1 border-1 border-black bg-white rounded text-sm p-1 w-full"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h6 className="mt-3 text-sm font-semibold">Password</h6>
          <input
            className="border mt-1 border-1 border-black rounded text-sm p-1 w-full"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="hover:bg-[#efca6f] bg-[#fdd265] w-full mt-4 rounded text-sm py-1 border border-1 border-black"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="text-xs font-normal mt-4">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <div className="mt-3 flex items-center cursor-pointer">
          <ArrowRightIcon />
          <a className="text-sm text-blue-700 ">Need Help?</a>
        </div>
      </div>
      <p className="mt-4 text-[#767676] text-xs bg-white z-10 px-2">
        New to Amazon?
      </p>
      <hr className="text-black w-[315px] relative bottom-[7px] " />
      <button
        onClick={register}
        className="bg-[#E3E6EB] hover:bg-[#ced1d8] w-[315px] mt-2 rounded text-sm py-1 border border-1 border-black"
      >
        Create your Amazon account
      </button>
    </div>
  );
};

export default Login;
