import { useState, useEffect } from "react";

const useProductInfo = (productId) => {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await res.json();
    // console.log(data);
    setProductInfo(data);
  };

  return productInfo;
};

export default useProductInfo;
