import { useState } from "react";
import * as S from "./style";

export default function DropdownMenu() {
  const [click, setClick] = useState(false);
  const [place, setPlace] = useState("Dropdown Menu");
  const changeClick = () => {
    setClick(!click);
  };
  return (
    <S.Background>
      <S.Dropdown onClick={changeClick} check={click}>
        <S.Input
          type="text"
          className="text02"
          readOnly
          placeholder={place}
        ></S.Input>
        <S.Option check={click}>
          <div onMouseOver={() => setPlace("Html")}>Html</div>
          <div onMouseOver={() => setPlace("CSS")}>CSS</div>
          <div onMouseOver={() => setPlace("Javascript")}>Javascript</div>
          <div onMouseOver={() => setPlace("ReactJS")}>ReactJS</div>
          <div onMouseOver={() => setPlace("Photoshop")}>Photoshop</div>
        </S.Option>
      </S.Dropdown>
    </S.Background>
  );
}
