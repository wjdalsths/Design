import styled from "@emotion/styled";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--clr2);
`;

export const Navigation = styled.div`
  position: relative;
  width: 400px;
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  ul {
    display: flex;
    width: 350px;
    padding: 0;
    li {
      position: relative;
      list-style: none;
      width: 70px;
      height: 70px;
      z-index: 1;
      a {
        position: relative;
        display: flex;
        justify-self: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        text-align: center;
        font-weight: 500;
      }
    }
  }
`;

export const List = styled.li``;
export const Icon = styled.span`
  position: relative;
  display: block;
  line-height: 75px;
  font-size: 1.5em;
  text-align: center;
  transition: 0.5s;
  color: var(--clr2);
  /* ${List}:hover & {} */
  ${(e) => (e.check ? "transform: translateY(-35px);" : "")}
`;
export const Text = styled.span`
  position: absolute;
  padding-top: 25px;
  color: var(--clr2);
  font-weight: 400;
  letter-spacing: 0.05em;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(20px);
  ${List}:hover & {
  }
  ${(e) => (e.check ? "opacity: 1;transform: translateY(10px);" : "")}
`;

export const Indicator = styled.div`
  position: absolute;
  top: -50%;
  width: 70px;
  height: 70px;
  background: #29fd53;
  border-radius: 50%;
  border: 6px solid var(--clr2);
  transition: 0.5s;

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 0px -10px 0 0 var(--clr2);
  }
  ::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: 0px -10px 0 0 var(--clr2);
  }
`;
