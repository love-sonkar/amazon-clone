import React, { useContext, useState } from "react";
import styled from "styled-components";
import DataContaxt from "./hooks/DataContaxt";
import Price from "./Price";
import RatingComponent from "./RatingComponent";
import { Heading, Paragraph } from "./styledcomponents/Component";
import { BiPlus, BiMinus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Cartitem = ({ data }) => {
  const { dispatch } = useContext(DataContaxt);
  const [ChangePrice, setChangePrice] = useState(1);

  const DescriptionCut = (string, n) => {
    return string.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  const handleclick = () => {
    setChangePrice(() => ChangePrice + 1);
  };
  const handleclickMinus = () => {
    {
      ChangePrice === 1 ? "" : setChangePrice(() => ChangePrice - 1);
    }
  };

  return (
    <>
      <CartWrapper>
        <div className="image">
          <img src={data?.image} alt="" />
        </div>
        <div className="content">
          <Heading className="heading" f="1.1rem">
            {data?.title}
          </Heading>
          <Price price={data?.price} />
          <RatingComponent rating={data?.rating.rate} />
          <Paragraph className="hide" f=".8rem">
            {DescriptionCut(`${data?.description}`, 50)}
          </Paragraph>
          <QtyWrapper>
            {ChangePrice !== 1 && <BiMinus onClick={handleclickMinus} />}
            <p>{ChangePrice}</p>
            <BiPlus onClick={handleclick} />
          </QtyWrapper>
        </div>
        <MdDelete
          onClick={() => dispatch({ type: "REMOVE_TO_CART", payload: data })}
          className="delete"
        />
      </CartWrapper>
    </>
  );
};

export default Cartitem;

const CartWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;
  border-bottom: 1px solid #f3a847;
  margin-bottom: 10px;
  padding: 10px 10px;
  background: #ffffff;
  border-radius: 5px;
  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }

  .heading {
    width: 90%;
  }

  .delete {
    cursor: pointer;
    font-size: 2rem;
    height: 50px;
    position: absolute;
    top: 0px;
    right: 4px;
    color: red;
  }

  @media (max-width: 468px) {
    .hide {
      display: none;
    }
  }
`;

const QtyWrapper = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #f3a847;
  svg {
    height: 26px;
    font-size: 3rem;
    cursor: pointer;
    color: rgb(0, 0, 0);
    background: #f3a847;
    padding: 6px 10px;
  }
  p {
    width: 100%;
    text-align: center;
  }
`;
