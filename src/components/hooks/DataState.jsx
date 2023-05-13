import axios from "axios";
import React, { useState, useEffect } from "react";
import DataContaxt from "./DataContaxt";
const DataState = ({ children }) => {
  const [storedata, setStoreData] = useState(null);

  const FetchApi = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setStoreData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    return FetchApi();
  }, []);

  return (
    <DataContaxt.Provider value={{ storedata, setStoreData }}>
      {children}
    </DataContaxt.Provider>
  );
};

export default DataState;
