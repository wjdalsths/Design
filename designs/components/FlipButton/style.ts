import styled from "@emotion/styled";

export const Background = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #49c6ff;
`;

export const A = styled.a`
  position: relative;
  padding: 20px 40px;
  background: #058d9e;
  color: #fff;
  text-transform: uppercase;
  font-family: sans-serif;
  text-decoration: none;
  letter-spacing: 4px;
  transform-style: preserve-3d;
  transition: ease-in-out 2s;
  border-radius: 60px;
  :hover {
    transform: rotateX(360deg);
  }
  ::before {
    content: "";
    position: absolute;
    top: 4px;
    left: 6px;
    right: 6px;
    bottom: 4px;
    border: 2px solid #fff;
    transform-style: preserve-3d;
    transform: perspective(500px) translateZ(15px);
    border-radius: 60px;
  }
  ::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    border: 2px solid #fff;
    transform-style: preserve-3d;
    transform: perspective(500px) translateZ(-15px);
    border-radius: 60px;
  }
`;

export const SPAN = styled.span`
  display: block;
  font-weight: bold;
  transform-style: preserve-3d;
  transform: perspective(100px) translateZ(20px);
`;
