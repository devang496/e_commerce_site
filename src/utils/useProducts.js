import { useState, useEffect } from "react";

const UseProducts = () => {
  const [finalData, setFinalData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [searchedText, setSearchedText] = useState("");

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    setFinalData(data.products);
    setfilteredData(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fourPlusRating = () => {
    const filteredData = finalData.filter((data) => {
      return data.rating > 4;
    });
    setfilteredData(filteredData);
  };

  const searchOption = () => {
    const filteredList = finalData.filter((item) => {
      const listData = item.title.toLowerCase();
      const searchData = searchedText.toLowerCase();
      return listData.includes(searchData);
    });
    setfilteredData(filteredList);
  };

  return {
    finalData,
    filteredData,
    fourPlusRating,
    searchOption,
    searchedText,
    setSearchedText,
  };
};

export default UseProducts;
