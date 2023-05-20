import axios from "axios";
import React, { useEffect, useReducer } from "react";
import ProductReducers from "../reducers/ProductReducers";
import DataContaxt from "./DataContaxt";

const DataState = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducers, {
    products: [],
    cart: [],
  });

  const FetchApi = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch({ type: "ALL_PRODUCTS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    return FetchApi();
  }, []);

  console.log(state);

  return (
    <DataContaxt.Provider value={{ state, dispatch }}>
      {children}
    </DataContaxt.Provider>
  );
};

export default DataState;
