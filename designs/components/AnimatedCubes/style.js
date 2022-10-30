import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #222;
`;

export const Cube = styled.div`
  --col: ${(e) => e.col};
  --scl: ${(e) => e.scl};
  position: absolute;
  width: 300px;
  height: 300px;
  ${(e) =>
    e.scl &&
    css`
      scale: 0.5;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -400px);
    `}
  &:hover {
    span {
      background: transparent;
      border: 10px solid var(--col);
      filter: drop-shadow(0 0 20px var(--col));
    }
  }
`;
export const Big = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: animate 6s linear infinite;
  @keyframes animate {
    0% {
      transform: rotateX(-20deg) rotateY(360deg);
    }
    100% {
      transform: rotateX(-20deg) rotateY(0deg);
    }
  }
  .top {
    transform: rotateX(90deg) translateZ(150px);
    ::before {
      content: "";
      position: absolute;
      inset: 0;
      transform: translateZ(-350px);
      background: rgba(0, 0, 0, 0.5);
      filter: blur(50px);
    }
  }
`;

export const SPAN = styled.span`
  --i: ${(e) => e.num};
  --clr: ${(e) => e.clr};
  position: absolute;
  width: 300px;
  height: 300px;
  background: var(--clr);
  transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
  transform-style: preserve-3d;
  transition: 0.5s;
`;
export const Big2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: animate2 6s linear infinite;
  scale: 0.5;
  @keyframes animate2 {
    0% {
      transform: rotateX(-20deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(-20deg) rotateY(360deg);
    }
  }
  .top {
    transform: rotateX(90deg) translateZ(150px);
    ::before {
      content: "";
      position: absolute;
      inset: 0;
      transform: translateZ(-350px);
      background: rgba(0, 0, 0, 0.35);
      filter: blur(50px);
    }
  }
`;

export const SPAN2 = styled.span`
  --i: ${(e) => e.num};
  --clr: ${(e) => e.clr};
  position: absolute;
  width: 300px;
  height: 300px;
  background: var(--clr);
  transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
  transform-style: preserve-3d;
  transition: 0.5s;
`;
