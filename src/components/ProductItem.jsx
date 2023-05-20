import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Price from "./Price";
import RatingComponent from "./RatingComponent";
import { Heading, Paragraph } from "./styledcomponents/Component";
import { AiOutlineShoppingCart } from "react-icons/ai";
import DataContaxt from "./hooks/DataContaxt";

const ProductItem = ({ data }) => {
  const { state, dispatch } = useContext(DataContaxt);

  const DescriptionCut = (string, n) => {
    return string.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <ProductWrapper>
      <div className="image">
        <img src={data?.image} alt="" />
      </div>
      <div className="content">
        <Heading f="1.1rem">{data?.title}</Heading>
        <Price price={data?.price} />
        <RatingComponent rating={data?.rating.rate} />
        <Paragraph f=".8rem">
          {DescriptionCut(`${data?.description}`, 80)}
        </Paragraph>

        {state.cart.some((i) => i.id === data.id) ? (
          <RemoveButton
            onClick={() => dispatch({ type: "REMOVE_TO_CART", payload: data })}
          >
            <AiOutlineShoppingCart />
            Remove
          </RemoveButton>
        ) : (
          <Button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: data })}
          >
            <AiOutlineShoppingCart />
            Add To Card
          </Button>
        )}
      </div>
    </ProductWrapper>
  );
};

export default ProductItem;

const ProductWrapper = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 10px 10px 0 0;
  display: flex;
  gap: 1rem;
  padding: 10px;
  flex-direction: column;
  .image {
    height: 100%;
    display: grid;
    place-items: center;
  }
  img {
    height: 130px;
    margin: 0 auto;
  }

  .content {
    justify-content: flex-end;
  }
`;

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 10px 20px;
  margin: 10px 0;
  outline: none;
  font-size: 1.2rem;
  border: 1px solid green;
  background: green;
  color: white;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: black;
    background: transparent;
  }
  svg {
    font-size: 1.875rem;
  }
`;

export const RemoveButton = styled(Button)`
  background: red;
  border: 1px solid red;
`;
