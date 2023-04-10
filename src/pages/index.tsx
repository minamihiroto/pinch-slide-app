import React, { createRef } from "react";
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ZoomableBox = styled.div`
  width: 1000px;
  height: 1000px;
  margin: 50px;
  transition: transform 0.3s;

  &.zoom-in {
    transform: scale(1.2);
  }
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const zoomIn = css`
  .zoom-in {
    transform: scale(1.2);
    transition: transform 0.3s;
  }
`;

const Home = () => {
  const blueBox = createRef<HTMLDivElement>();

  const handleBlueBoxClick = () => {
    blueBox.current?.classList.toggle("zoom-in");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Global styles={zoomIn} />
      <ZoomableBox ref={blueBox} style={{ backgroundColor: "blue" }}>
        <Slider {...settings}>
          <div>
            <p>aaaaaaaaaaa</p>
          </div>
          <div>
            <p>bbbbbbbbbbbbb</p>
          </div>
          <div>
            <p>ccccccccccccc</p>
          </div>
        </Slider>
      </ZoomableBox>
      <ButtonWrapper>
        <button onClick={handleBlueBoxClick}>青い四角のアウト</button>
      </ButtonWrapper>
    </>
  );
};

export default Home;
