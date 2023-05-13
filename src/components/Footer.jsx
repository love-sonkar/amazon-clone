import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <FooterWrapper>Love Sonkar &copy; 2023-2024</FooterWrapper>;
};

export default Footer;

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 10px 20px;
  font-size: 1.5rem;
  background: black;
  color: white;
`;
