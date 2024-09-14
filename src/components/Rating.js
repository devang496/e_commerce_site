import React from "react";
import ReviewCard from "./ReviewCard";

const Rating = ({ productInfo, showDetails, setShowDetails }) => {
  return (
    <div className="mt-6">
      <h1 className="font-bold text-2xl mb-3">Rating</h1>
      {productInfo.reviews?.map((review, index) => {
        return (
          <div key={review.reviewerEmail} className="mb-4">
            <ReviewCard
              review={review}
              showDetails={showDetails === index}
              handleClick={() => {
                setShowDetails(index);
              }}
              // dummyData={dummyData}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
