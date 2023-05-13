import React, { useState } from "react";
import styled from "styled-components";
import { CenterDiv } from "./styledcomponents/Component";

const BannerContent = () => {
  const [imageId, setImageId] = useState(0);

  const handleRightArrow = () => {
    if (imageId === 2) {
      setImageId(0);
    } else {
      setImageId((imageId) => imageId + 1);
    }
  };

  const handleLeftArrow = () => {
    if (imageId === 0) {
      setImageId(2);
    } else {
      setImageId((imageId) => imageId - 1);
    }
  };

  const ImageData = [
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/HSS/May/HSS_3000x1200-PC-1._CB589991128_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/2023/Q2/PC_Hero_VG_BAU_Consoles_Apr1st-week_Unrec_2x._CB592233658_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/SummerSale/GW/D81067155_WLD_SummerSale_Design_SIM_DesktopTallHero_3000x1200._CB589999476_.jpg",
    },
  ];

  return (
    <BannerWrapper>
      <Arrow
        onClick={handleLeftArrow}
        left="10px"
        className="material-symbols-outlined"
      >
        chevron_left
      </Arrow>
      <Img src={ImageData[imageId]?.image} alt="../../public/screen.jpg" />
      <Arrow
        onClick={handleRightArrow}
        right="10px"
        className="material-symbols-outlined"
      >
        chevron_right
      </Arrow>
      <Gradient />
    </BannerWrapper>
  );
};

export default BannerContent;

const BannerWrapper = styled.div`
  position: relative;
  color: rgb(0, 0, 0);
  display: flex;
`;

const Img = styled.img`
  margin: 0 auto;
`;

const Arrow = styled.span`
  position: absolute;
  cursor: pointer;
  font-size: 3.5rem;
  display: grid;
  place-content: center;
  height: 50%;
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  user-select: none;
  color: white;
  transition: all 0.2s ease-in;
  &:hover {
    color: #f3a847;
  }
`;

const Gradient = styled.div`
  height: 200px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  @media (max-width: 768px) {
    height: 100px;
  }
`;
