import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";
import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";

import logo from "../img/online_shop_logo.avif";

const Header = () => {
  const [loggedUser, setLoggedUser] = useState("Login");
  const userStatus = useUserStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log("data", data);

  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);

  return (
    <div className="flex justify-between items-center p-2 bg-blue-300 shadow-lg">
      <img src={logo} className="w-[100px] h-20 rounded-3xl" />
      <ul className="flex p-2 items-center">
        <li className="p-2 hover:bg-blue-100 rounded-lg">
          Online : {userStatus === true ? "🟢" : "🔴"}
        </li>
        <li className="p-2 hover:bg-blue-100 rounded-lg">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2 hover:bg-blue-100 rounded-lg">
          <Link to="/about">About</Link>
        </li>
        <li className="p-2 hover:bg-blue-100 rounded-lg">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="p-2 hover:bg-blue-100 rounded-lg">
          <Link to="/cart">
            Cart {cartItems.length > 0 ? <sup>{cartItems.length}</sup> : ""}
          </Link>
        </li>
        <li className="p-2">
          <button
            className="bg-gray-100 shadow-lg rounded-lg px-2 py-0.5 items-center hover:bg-blue-200"
            onClick={() => {
              if (loggedUser === "Login") {
                setLoggedUser("Logout");
              } else {
                setLoggedUser("Login");
              }
            }}
          >
            {loggedUser}
          </button>
        </li>
        {loggedUser === "Login" ? (
          <li className="px-2 font-bold text-xl text-red-700">Default</li>
        ) : (
          <li className="px-2 font-bold text-xl text-red-700">
            {loggedInUser}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
