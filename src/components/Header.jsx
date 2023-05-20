import React, { useContext, useState } from "react";
import { CenterDiv, BackGround } from "./styledcomponents/Component";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import NavigationBox from "./NavigationBox";
import DataContaxt from "./hooks/DataContaxt";

const Header = () => {
  const { state, dispatch } = useContext(DataContaxt);

  return (
    <BackGround bgcolor="black">
      <CenterDiv>
        <HeaderWrapper>
          <NavLink to="/" className="logo">
            <LogoImage
              src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695"
              alt="amazonlogo"
            />
          </NavLink>
          <SearchBox>
            <Input type="text" name="" id="" />
            <BiSearch />
          </SearchBox>
          <LastDivWrapper>
            <HiddenBox className="hiddnen">
              <NavigationBox
                link="/"
                heading="Account & Lists"
                paragraph="Hello sing in"
              />
              <NavigationBox link="/" heading="& Orders" paragraph="Returns" />
            </HiddenBox>
            <CartContainer as={NavLink} to="/cart">
              <AiOutlineShoppingCart />
              <CartItem>{state.cart === null ? 0 : state.cart.length}</CartItem>
            </CartContainer>
          </LastDivWrapper>
        </HeaderWrapper>
      </CenterDiv>
    </BackGround>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  background-color: rgb(0, 0, 0);
  padding: 10px 20px;
  color: rgb(255, 255, 255);
  justify-content: space-between;
`;

const LogoImage = styled.img`
  height: 30px;
`;

const SearchBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  svg {
    height: 36px;
    font-size: 3rem;
    cursor: pointer;
    color: rgb(0, 0, 0);
    background: #f3a847;
    padding: 6px 10px;
    border-radius: 0 5px 5px 0;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 6px 15px;
  width: 100%;
`;

const LastDivWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  svg {
    font-size: 1.8rem;
  }
  a {
    color: rgb(255, 255, 255);
  }
`;

const HiddenBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CartContainer = styled.div`
  position: relative;
  display: flex;
  gap: 0.5rem;
`;

const CartItem = styled.span`
  color: white;
  background: red;
  border-radius: 50%;
  padding: 1px 8px;
  position: absolute;
  bottom: 14px;
  right: -15px;
`;
