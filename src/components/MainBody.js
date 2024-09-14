import CardDetails, { withAvailabilityStatus } from "./CardDetails";
import { Link } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";
import UseProducts from "../utils/useProducts";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const MainBody = () => {
  const userStatus = useUserStatus();

  const {
    finalData,
    filteredData,
    fourPlusRating,
    searchOption,
    searchedText,
    setSearchedText,
  } = UseProducts();

  const ProductCardWithStatus = withAvailabilityStatus(CardDetails);

  if (userStatus === false) {
    return <h1>There is a some issue in your connectivity!</h1>;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  // console.log("Data -- ", filteredData);

  return (
    <div className="m-2">
      <div className="flex justify-evenly items-center">
        <div className="flex m-2 justify-center items-center">
          <input
            className="border-[1px] border-black rounded-lg text-center"
            value={searchedText}
            onChange={(e) => {
              setSearchedText(e.target.value);
            }}
          ></input>
          <button
            className="ml-4 bg-blue-100 shadow-lg rounded-lg px-2 py-0.5 hover:bg-blue-300"
            onClick={searchOption}
          >
            Search
          </button>
          <div className="flex ml-4">
            <button
              className="bg-blue-100 shadow-lg rounded-lg px-2 py-0.5 hover:bg-blue-300"
              onClick={fourPlusRating}
            >
              4+ Ratings
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="font-thin text-gray-500">For changing username*</p>
          <input
            className="border-[1px] border-black rounded-lg text-center ml-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap m-3">
        {filteredData.map((data) => {
          return (
            <Link to={`/product/${data.id}`} key={data.id}>
              {data.availabilityStatus.includes("Stock") ? (
                <ProductCardWithStatus productData={data} />
              ) : (
                <CardDetails productData={data} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MainBody;
