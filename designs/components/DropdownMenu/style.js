import styled from "@emotion/styled";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f9f9f9;
`;

export const Dropdown = styled.div`
  position: relative;
  margin-top: 100px;
  width: 300px;
  height: 50px;
  ::before {
    content: "";
    position: absolute;
    top: 25px;
    right: 28px;
    width: 12px;
    height: 2px;
    background: #555;
    z-index: 10;
    transform: rotate(40deg);
    transition: 0.5s;
    ${(e) => (e.check ? "right:20px" : "")};
  }
  ::after {
    content: "";
    position: absolute;
    top: 25px;
    right: 20px;
    width: 12px;
    height: 2px;
    background: #555;
    z-index: 10;
    transform: rotate(-40deg);
    transition: 0.5s;
    ${(e) => (e.check ? "right:28px" : "")};
  }
`;
export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 10px;
  padding: 12px 20px;
  font-size: 16px;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  outline: none;
  border: none;
`;

export const Option = styled.div`
  position: absolute;
  top: 70px;
  width: 100%;
  background: #fff;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  transition: 0.25s;
  ${(e) =>
    e.check
      ? `visibility: visible;
          opacity: 1;`
      : ""};

  div {
    padding: 12px 20px;
    cursor: pointer;
    :hover {
      background: #62baea;
      color: #fff;
    }
  }
`;
