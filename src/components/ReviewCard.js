import React, { useState } from "react";

const ReviewCard = ({ review, showDetails, handleClick }) => {
  return (
    <div className=" bg-blue-100 p-4 rounded-md shadow-md">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleClick}
      >
        <div>
          <span className="font-bold text-xl">{review.reviewerName}</span>
          <span className="ml-2 text-gray-400 text-sm">{review.date}</span>
        </div>
        <span>{showDetails === true ? "🔼" : "🔽"}</span>
      </div>
      {showDetails && (
        <div className="mt-4">
          <p>{review.comment}</p>
          <p>★ {review.rating}</p>
          {/* <p>{dummyData}</p> */}
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
