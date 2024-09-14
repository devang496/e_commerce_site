import React from "react";

const ProductInfo = ({ productInfo }) => {
  return (
    <div className="flex bg-blue-100 p-3  rounded-md shadow-lg">
      <div className="flex flex-col gap-2 w-9/12">
        <h1 className="font-bold text-xl">{productInfo?.title}</h1>
        <h2>{productInfo?.description}</h2>
        <h2>₹ {productInfo?.price}</h2>
        <h2>★ {productInfo?.rating}</h2>
      </div>
      <div className="w-3/12">
        <img
          src={productInfo?.thumbnail}
          alt={productInfo?.title}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ProductInfo;
