import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const CardDetails = (props) => {
  // console.log("Dataaaaa - ", props.productData);
  const { thumbnail, title, price, rating, availabilityStatus } =
    props.productData;

  const { loggedInUser } = useContext(UserContext);

  const dispatch = useDispatch();

  return (
    <div className="mx-[1.4rem] my-2 bg-blue-100 rounded-lg shadow-lg flex flex-col items-center w-[250px]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center w-[150px] h-auto mx-5">
          <img className="w-fit h-fit rounded-3xl" src={thumbnail} />
        </div>
        <div className="text-center">
          <p className="font-semibold">{title}</p>
          <p className="font-thin">₹ {price}</p>
          <p className="font-thin">★ {rating}</p>
          <p className="font-thin">Stock :{availabilityStatus}</p>
          {/* <p>{loggedInUser}</p> */}
        </div>
      </div>
      <button
        className="bg-blue-200 text-black px-2 shadow-lg rounded-lg my-4 hover:bg-blue-300"
        onClick={(e) => {
          e.preventDefault();
          dispatch(addItem(props.productData));
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

// HOC - It will take the component as a argument and will return the component by adding some new features.
// In HOC -> It will return component -> And component will return JSX.

export const withAvailabilityStatus = (Component) => {
  return (props) => {
    return (
      <div>
        {props.productData.availabilityStatus === "In Stock" ? (
          <label className="absolute mx-[1.4rem] rounded-sm bg-green-400 px-2 text-green-800">
            In Stock
          </label>
        ) : (
          <label className="absolute mx-[1.4rem] rounded-sm bg-red-400 px-2 text-red-800">
            Low Stock
          </label>
        )}
        <Component productData={props.productData} />
      </div>
    );
  };
};

export default CardDetails;
