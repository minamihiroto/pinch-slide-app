import React, { createRef } from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ZoomableBox = styled.div`
  transition: transform 0.3s;
  transform-origin: top;
  &.zoom-in {
    transform: scale(4);
  }
`;

const NavigationButtons = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
`;

const Home = () => {
  const blueBox = createRef<HTMLDivElement>();
  const sliderRef = createRef<Slider>();

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
    if (!blueBox.current?.classList.contains("zoom-in")) {
      blueBox.current?.classList.toggle("zoom-in");
    }
  };

  const handleBlueBoxClick = () => {
    if (blueBox.current?.classList.contains("zoom-in")) {
      blueBox.current.classList.toggle("zoom-in");
    }
    sliderRef.current?.slickGoTo(2);
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

  React.useEffect(() => {
    goToSlide(0);
    if (!blueBox.current?.classList.contains("zoom-in")) {
      blueBox.current?.classList.toggle("zoom-in");
    }
  });

  return (
    <div style={{ margin: "60px 0px 0px 0px" }}>
      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
      `}</style>
      <ZoomableBox ref={blueBox} style={{ backgroundColor: "blue" }}>
        <Slider {...settings} ref={sliderRef}>
          <div>
            <p
              style={{
                height: "180px",
                width: "200px",
                background: "red",
                textAlign: "center",
                color: "black",
              }}
            >
              aaaaaaaaaaa
            </p>
          </div>
          <div>
            <p
              style={{
                height: "130px",
                width: "200px",
                background: "white",
                textAlign: "center",
                color: "black",
              }}
            >
              bbbbbbbbbbbbb
            </p>
          </div>
          <div>
            <p
              style={{
                height: "100px",
                width: "200px",
                background: "red",
                textAlign: "center",
                color: "black",
              }}
            >
              ccccccccccccc
            </p>
          </div>
          <div>
            <p
              style={{
                height: "160px",
                width: "200px",
                background: "white",
                textAlign: "center",
                color: "black",
              }}
            >
              dddddddddddddd
            </p>
          </div>
          <div>
            <p
              style={{
                height: "300px",
                width: "200px",
                background: "red",
                textAlign: "center",
                color: "black",
              }}
            >
              eeeeeeeeeeeeeee
            </p>
          </div>
        </Slider>
      </ZoomableBox>
      <NavigationButtons>
        <button onClick={() => goToSlide(0)}>1枚目へ</button>
        <button onClick={() => goToSlide(1)}>2枚目へ</button>
        <button onClick={() => goToSlide(2)}>3枚目へ</button>
        <button onClick={() => goToSlide(3)}>4枚目へ</button>
        <button onClick={() => goToSlide(4)}>5枚目へ</button>
        <button onClick={handleBlueBoxClick}>ピンチ設定</button>
      </NavigationButtons>
    </div>
  );
};

export default Home;
