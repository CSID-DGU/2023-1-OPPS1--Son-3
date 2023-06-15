import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const Canvas = ({
  isStart,
  canvasWidth,
  canvasHeight,
  nodePositions,
  color,
  clickPosition,
}) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [ctx, setCtx] = useState();
  const rightPosition = ([x, y]) => {
    return [(canvasWidth / 700) * x, (canvasHeight / 481) * y];
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    contextRef.current = context;
    setCtx(context);
  }, [canvasWidth, canvasHeight]);
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
        if (i >= nodePositions.length || StartState !== state.current())
          clearInterval(animation); // continue until criteria
      }
    }
  }, [isStart]);

  //clickposistion값이 변화함에따라 좌표찍기
  useEffect(() => {
    if (clickPosition) {
      const { x, y } = clickPosition;
      const [canvasX, canvasY] = [x - 310, y - 165];
      // const [canvasX, canvasY] = [x, y];
      setTimeout(() => {
        drawCircle([canvasX, canvasY], [canvasX, canvasY]);
      }, 10);
      console.log(
        "node x : " +
          (canvasX * 700) / canvasWidth +
          "node y : " +
          (canvasY * 481) / canvasHeight
      );
    }
  }, [clickPosition]);

  const drawCircle = ([startX, startY], [endX, endY]) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.moveTo(startX, startY);
    ctx.quadraticCurveTo(startX, startY, endX, endY);
    ctx.stroke();
  };

  return (
    <div>
      <StyledCanvas ref={canvasRef} id="canvas"></StyledCanvas>
    </div>
  );
};
const StyledCanvas = styled.canvas`
  background-image: url("/backgroundImgs/campus_map.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
`;

export default Canvas;
