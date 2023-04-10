import React, { createRef } from "react";
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ZoomableBox = styled.div`
  width: 100%;
  margin: 50px;
  transition: transform 0.3s;

  &.zoom-in {
    transform: scale(0.2);
  }
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const Home = () => {
  const box = createRef<HTMLDivElement>();

  const handleBlueBoxClick = () => {
    box.current?.classList.toggle("zoom-in");
  };

  return (
    <>
      <ZoomableBox ref={box}>
        ここにカルーセル
      </ZoomableBox>
      <ButtonWrapper>
        <button onClick={handleBlueBoxClick}>ピンチイン・アウト</button>
      </ButtonWrapper>
    </>
  );
};

export default Home;
