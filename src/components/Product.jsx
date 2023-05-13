import React, { useContext } from "react";
import styled from "styled-components";
import DataContaxt from "./hooks/DataContaxt";
import ProductItem from "./ProductItem";
import { CenterDiv } from "./styledcomponents/Component";

const Product = () => {
  const { storedata } = useContext(DataContaxt);

  return (
    <CenterDiv>
      <ProductWrapper>
        {storedata &&
          storedata?.map((item) => {
            return <ProductItem key={item.id} data={item} />;
          })}
      </ProductWrapper>
    </CenterDiv>
  );
};

export default Product;

const ProductWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  transform: translateY(-137px);
  padding: 0 10px;
  @media (max-width: 768px) {
    transform: translateY(-50px);
  }
  @media (max-width: 468px) {
    transform: translateY(-20px);
  }
`;
