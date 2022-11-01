import { useState } from "react";
import * as S from "./style";

export default function NavigationBar() {
  const [click, setClick] = useState(false);
  const changeClick = () => {
    setClick(!click);
    console.log(click);
  };
  return (
    <S.Background>
      <S.Navigation>
        <S.MenuToggle onClick={changeClick} check={click}>
          <i></i>
        </S.MenuToggle>
        <S.Menu check={click}>
          <ul>
            <li>
              <a href="#">
                <ion-icon name="home-outline"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="person-outline"></ion-icon>
              </a>
            </li>
            <li></li>
            <li>
              <a href="#">
                <ion-icon name="heart-outline"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="notifications-outline"></ion-icon>
              </a>
            </li>
          </ul>
        </S.Menu>
      </S.Navigation>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </S.Background>
  );
}
