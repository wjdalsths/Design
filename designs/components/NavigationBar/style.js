import styled from "@emotion/styled";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--clr);
`;

export const Navigation = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center; ;
`;

export const MenuToggle = styled.div`
  position: relative;
  width: 65px;
  height: 65px;
  background: #ff4886;
  border: 5px solid var(--clr);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  transform: translateY(-30px);

  ::before {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: white;
    clip-path: polygon(
      10% 0,
      0 10%,
      40% 50%,
      0 90%,
      10% 100%,
      50% 60%,
      90% 100%,
      100% 90%,
      60% 50%,
      100% 10%,
      90% 0,
      50% 40%
    );

    transform: rotate(45deg);
    transition: 1.5s;
    ${(e) => (e.check ? "transform: rotate(270deg);" : "")};
  }

  i {
    position: absolute;
    inset: 0;
    ::before {
      content: "";
      position: absolute;
      top: 22px;
      left: -23px;
      width: 20px;
      height: 20px;
      background: transparent;
      border-top-right-radius: 20px;
      box-shadow: 3px -6px var(--clr);
    }
    ::after {
      content: "";
      position: absolute;
      top: 22px;
      right: -23px;
      width: 20px;
      height: 20px;
      background: transparent;
      border-top-left-radius: 20px;
      box-shadow: -3px -6px var(--clr);
    }
  }
`;

export const Menu = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 70px;
  transform: translateY(-30px);
  transition: transform 0.5s, width 0.5s, height 0.5s;
  transition-delay: 1s, 0.5s, 0.5s;
  ul {
    padding: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    line-height: 41px;
    li {
      list-style: none;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: 0.25s;
      transition-delay: 0s;
      transform: translateY(-30px);
      a {
        display: block;
        font-size: 2em;
        text-decoration: none;
        color: #555;
      }
      :hover {
        a {
          color: #ff4886;
        }
      }
      ${(e) =>
        e.check
          ? "opacity: 1;visibility: visible; transition-delay: calc(0.75s); transform: translateY(0px);"
          : ""}
    }
    li:ntn-child(3) {
      width: 30px;
    }
  }
  ${(e) =>
    e.check
      ? "width:360px;height:70px;transform: translateY(0px);transition-delay: 0s,0.5s,0.5s;"
      : ""};
`;
