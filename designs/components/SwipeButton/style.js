import styled from "@emotion/styled";
export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #28272a;
`;

export const BTN = styled.a`
  position: relative;
  width: 200px;
  height: 60px;
  background: rgba(225, 225, 225, 0.1);
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(225, 225, 225, 0.5);
  text-decoration: none;
  letter-spacing: 2px;
  border-top: 0.5px solid rgba(225, 225, 225, 0.35);
  border-left: 0.5px solid rgba(225, 225, 225, 0.35);
  padding-left: 45px;
  transition: 0.5s;
  overflow: hidden;
  :hover {
    padding-left: 0px;
    padding-right: 40px;
    color: rgba(225, 225, 225, 1);
    span {
      left: calc(100% - 55px);
    }
    ::after {
      transform: translateX(170px) skewX(30deg);
    }
  }

  span {
    position: absolute;
    left: 5px;
    width: 50px;
    height: 50px;
    background: #04fe4d;
    border-radius: 50%;
    transition: 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1a191d;
    font-size: 1.5em;
  }

  ::after {
    content: "";
    position: absolute;
    width: 80px;
    height: 100%;
    z-index: 1;
    background: rgba(225, 225, 225, 0.25);
    transform: translateX(-170px) skewX(30deg);
    transition: 0.5s ease-in-out;
  }
`;
