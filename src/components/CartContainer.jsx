import React, { useContext } from "react";
import styled from "styled-components";
import Cartitem from "./Cartitem";
import DataContaxt from "./hooks/DataContaxt";

const CartContainer = () => {
  const {
    state: { cart },
  } = useContext(DataContaxt);
  console.log(cart);
  return (
    <CartContainerWrapper>
      {cart.length === 0 ? (
        <h2>Cart is empty please add some product</h2>
      ) : (
        cart.map((item) => {
          return <Cartitem key={item.id} data={item} />;
        })
      )}
    </CartContainerWrapper>
  );
};

export default CartContainer;

const CartContainerWrapper = styled.div`
  padding: 20px;
`;
