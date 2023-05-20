import React, { useContext } from "react";
import styled from "styled-components";
import DataContaxt from "./hooks/DataContaxt";
import ProductItem from "./ProductItem";
import { CenterDiv } from "./styledcomponents/Component";

const Product = () => {
  const {
    state: { products },
  } = useContext(DataContaxt);
  return (
    <CenterDiv>
      <ProductWrapper>
        {products &&
          products?.map((item) => {
            return <ProductItem key={item.id} data={item} />;
          })}
      </ProductWrapper>
    </CenterDiv>
  );
};

export default Product;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  transform: translateY(-137px);
  padding: 0 10px;
  @media (max-width: 768px) {
    transform: translateY(-50px);
  }
  @media (max-width: 468px) {
    transform: translateY(-20px);
  }
`;
