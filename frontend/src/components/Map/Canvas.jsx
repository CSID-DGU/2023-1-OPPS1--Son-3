import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components/macro";
import MapImg from "../../components/MapImg";



const Container = styled.div`
  /* width: 100%;
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 87%;
    height: 87%;
  } */
`;

const Canvas = styled.canvas`
  background-image: url("/backgroundImgs/map.png");
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: left top; 기본 위치 (상단 왼쪽) */
  /* max-width: 100%;
  max-height: 100%; */
  /* transform: translateY(90px); */
  width: 100%;
  height: auto;

  @media screen and (max-width: 800px) {
    background-position: center; /* 모바일에서 가운데 정렬 */
    width: 90%;
    height: 90%;
    transform: translateY(-25px);
  }

  ${(props) =>
    props.isMobile &&
    css`
      width: 170% !important;
      height: 170% !important;
    `}
`;

const StyledContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const StyledCanvas = ({ canvasRef, isMobile }) => {
  return <Canvas ref={canvasRef} id="canvas" isMobile={isMobile} />;
};

export default function MapCanvas({
  isStart,
  canvasWidth,
  canvasHeight,
  nodePositions,
  color,
  clickPosition,
  // arrivalPinPosition,
  // departurePinPosition,
}) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [ctx, setCtx] = useState();
  const [isMobile, setIsMobile] = useState(false);

  const rightPosition = ([x, y]) => {
    return [(canvasWidth / 981) * x, (canvasHeight / 532) * y];
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    contextRef.current = context;
    setCtx(context);
  }, [canvasWidth, canvasHeight]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const state = useRef(null);
  const getState = () => {
    return isStart;
  };
  state.current = getState;

  useEffect(() => {
    if (nodePositions.length !== 0) {
      let i = 1;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      const animation = setInterval(animate, 0);
      function animate() {
        const StartState = isStart;
        const [beforeNodeX, beforeNodeY] = rightPosition(nodePositions[i - 1]);
        const [rightNodeX, rightNodeY] = rightPosition(nodePositions[i]);
        drawCircle([beforeNodeX, beforeNodeY], [rightNodeX, rightNodeY]);

        i++;
        if (i >= nodePositions.length || StartState !== state.current()){
          clearInterval(animation); // continue until criteria
          drawEnd([rightNodeX, rightNodeY], [rightNodeX, rightNodeY]);

        }
        else if(i===2) {
          drawStart([beforeNodeX, beforeNodeY], [beforeNodeX, beforeNodeY]);
        }
          
      }
    }
  }, [isStart, ctx, nodePositions]);

  useEffect(() => {
    if (clickPosition) {
      const { x, y } = clickPosition;
      const [canvasX, canvasY] = [x - 127, y - 170];//192 235로 맞추면 150퍼에서 맞음
      // const [canvasX, canvasY] = [x - 192, y - 235];
      setTimeout(() => {
        drawCircle([canvasX, canvasY], [canvasX, canvasY]);
      }, 10);
      console.log(
        "node x : " +
          (canvasX * 981) / canvasWidth +
          "node y : " +
          (canvasY * 532) / canvasHeight
      );
    }
  }, [clickPosition, canvasWidth, canvasHeight]);

  const drawCircle = ([startX, startY], [endX, endY]) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.moveTo(startX, startY);
    ctx.quadraticCurveTo(startX, startY, endX, endY);
    ctx.stroke();
  };

  
  const drawEnd = ([startX, startY], [endX, endY]) => {
    ctx.beginPath();
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.moveTo(startX, startY);
    ctx.quadraticCurveTo(startX, startY, endX, endY);
    ctx.stroke();
  };

  
  const drawStart = ([startX, startY], [endX, endY]) => {
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.moveTo(startX, startY);
    ctx.quadraticCurveTo(startX, startY, endX, endY);
    ctx.stroke();
  };

  return (
    // <StyledContainer>
      <StyledCanvas canvasRef={canvasRef} isMobile={isMobile} />
    // </StyledContainer>
  );
}
