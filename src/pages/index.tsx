import React, { createRef } from "react";
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

const ZoomableBox = styled.div`
  width: 1000px;
  height: 1000px;
  margin: 50px;
  transition: transform 0.3s;

  &.zoom-in {
    transform: scale(2);
  }
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const zoomIn = css`
  .zoom-in {
    transform: scale(2);
    transition: transform 0.3s;
  }
`;

const Home = () => {
  const blueBox = createRef<HTMLDivElement>();

  const handleBlueBoxClick = () => {
    blueBox.current?.classList.toggle("zoom-in");
  };

  return (
    <>
      <Global styles={zoomIn} />
      <ZoomableBox
        ref={blueBox}
        style={{ backgroundColor: "blue" }}
      >

      </ZoomableBox>

      <ButtonWrapper>
        <button onClick={handleBlueBoxClick}>青い四角のアウト</button>
      </ButtonWrapper>
    </>
  );
};

export default Home;
