import React, { useContext } from "react";
import DataContaxt from "./hooks/DataContaxt";

const CounterQty = () => {
  const { state, dispatch } = useContext(DataContaxt);

  return <div>{state.cart.qty}</div>;
};

export default CounterQty;
