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

  button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
  }
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
    <div style={{ margin: "80px 0px 0px 0px" }}>
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
        <button onClick={() => goToSlide(0)}>ステージ1</button>
        <button onClick={() => goToSlide(1)}>ステージ2</button>
        <button onClick={() => goToSlide(2)}>ステージ3</button>
        <button onClick={() => goToSlide(3)}>ステージ4</button>
        <button onClick={() => goToSlide(4)}>ステージ5</button>
        <button onClick={handleBlueBoxClick}>全体像把握</button>
      </NavigationButtons>
    </div>
  );
};

export default Home;
