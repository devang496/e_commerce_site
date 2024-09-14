import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProductInfo from "../utils/useProductInfo";
import Rating from "./Rating";
import ProductInfo from "./ProductInfo";

const ProductDetail = () => {
  const params = useParams();
  const productInfo = useProductInfo(params.pId); //Custom hook

  const [showDetails, setShowDetails] = useState(0);
  // const dummyData = "Some dummy data."; //Props Drilling

  return (
    <div className="m-auto p-4 w-2/3">
      <ProductInfo productInfo={productInfo} />
      <Rating
        productInfo={productInfo}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
        // dummyData={dummyData}
      />
    </div>
  );
};

export default ProductDetail;
