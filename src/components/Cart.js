import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductInfo from "./ProductInfo";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems : ", cartItems);

  const dispatch = useDispatch();

  return (
    <div className="my-4 mx-auto w-2/3">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-center my-4">Cart</h1>
        {cartItems.length !== 0 && (
          <button
            className="bg-blue-100 text-black rounded-lg px-2 py-2 hover:bg-blue-300"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear Cart
          </button>
        )}
      </div>
      {cartItems.length === 0 ? (
        <div>
          <h1>Your cart is empty, please add some products!</h1>
          <Link to="/" className="text-blue-300 underline">
            Go Home
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => {
            return <ProductInfo key={item.id} productInfo={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
