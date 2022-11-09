import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Background = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
`;

export const Gauge = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  ::before {
    position: absolute;
    content: "";
    top: 50%;
    width: 100%;
    height: 50%;
    background-color: gray;
    z-index: 900;
  }
`;

export const Progress = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */

  position: absolute;
  width: 100%;
  height: 100%;
  /* border: 0.1rem solid wheat; */
  border-radius: 50%;
  /* border-top-left-radius: 50%; */
  /* border-top-right-radius: 50%; */
  overflow: hidden;
  ::before {
    border: 1px solid yellow;

    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    background-color: gray;
    border-radius: 50%;
    z-index: 200;
  }
`;

const Rotate = keyframes`
  0%{
    background-color: blue;
    transform: rotate(-90deg);
  }
  80%{
    background-color: blue;
  }
`;

export const Bar = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: green;
  transform: rotate(90deg);
  transform-origin: center right;
  animation: ${Rotate} 2s ease-in-out;
`;

export const Neele = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  background-color: white !important;
  clip-path: polygon(50% 0, 50% 0, 52% 100%, 48% 100%);
  transform: rotate(90deg);
  transform-origin: bottom center;
  animation: ${Rotate} 2s ease-in-out;
  z-index: 1000;
`;
