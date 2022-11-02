import { useState } from "react";
import * as S from "./style";

export default function NavigationMenu() {
  const [click, setClick] = useState([false, false, false, false, false]);

  const changeClick = (num) => {
    console.log(click[num]);
  };
  return (
    <S.Background>
      <S.Navigation>
        <ul>
          <S.List
            onClick={(e) => {
              changeClick(0);
            }}
          >
            <a href="#">
              <S.Icon check={click}>
                <ion-icon name="home-outline"></ion-icon>
              </S.Icon>
              <S.Text check={click}>Home</S.Text>
            </a>
          </S.List>
          <S.List
            onClick={(e) => {
              changeClick(1);
            }}
          >
            <a href="#">
              <S.Icon check={click[1]}>
                <ion-icon name="person-outline"></ion-icon>
              </S.Icon>
              <S.Text check={click[1]}>Profile</S.Text>
            </a>
          </S.List>
          <S.List
            onClick={(e) => {
              changeClick(2);
            }}
          >
            <a href="#">
              <S.Icon check={click[2]}>
                <ion-icon name="chatbubble-outline"></ion-icon>
              </S.Icon>
              <S.Text check={click[2]}>Mesaage</S.Text>
            </a>
          </S.List>
          <S.List
            onClick={(e) => {
              changeClick(3);
            }}
          >
            <a href="#">
              <S.Icon check={click[3]}>
                <ion-icon name="camera-outline"></ion-icon>
              </S.Icon>
              <S.Text check={click[3]}>Photos</S.Text>
            </a>
          </S.List>
          <S.List
            onClick={(e) => {
              changeClick(4);
            }}
          >
            <a href="#">
              <S.Icon check={click[4]}>
                <ion-icon name="settings-outline"></ion-icon>
              </S.Icon>
              <S.Text check={click[4]}>Setting</S.Text>
            </a>
          </S.List>
          <S.Indicator></S.Indicator>
        </ul>
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
