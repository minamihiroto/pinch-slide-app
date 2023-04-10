import React, { createRef } from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ZoomableBox = styled.div`
  transition: transform 0.3s;
  transform-origin: top; // 変更
  &.zoom-in {
    transform: scale(4);
  }
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const Home = () => {
  const blueBox = createRef<HTMLDivElement>();

  const handleBlueBoxClick = () => {
    blueBox.current?.classList.toggle("zoom-in");
  };

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    swipe: false,
  };

  return (
    <>
      <ZoomableBox ref={blueBox} style={{ backgroundColor: "blue" }}>
        <Slider {...settings}>
          <div>
            <p style={{height:"180px",width: "200px",background: "red",textAlign:"center"}}>aaaaaaaaaaa</p>
          </div>
          <div>
            <p  style={{height:"130px",width: "200px",background: "white",textAlign:"center"}}>bbbbbbbbbbbbb</p>
          </div>
          <div>
            <p style={{height:"100px",width: "200px",background: "red",textAlign:"center"}}>ccccccccccccc</p>
          </div>
          <div>
            <p style={{width: "200px",background: "white",textAlign:"center"}}>dddddddddddddd</p>
          </div>
          <div>
            <p style={{width: "200px",background: "red",textAlign:"center"}}>eeeeeeeeeeeeeee</p>
          </div>
        </Slider>
      </ZoomableBox>
      <ButtonWrapper>
        <button onClick={handleBlueBoxClick}>ピンチ設定</button>
      </ButtonWrapper>
    </>
  );
};

export default Home;