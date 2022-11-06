import { useState } from "react";
import * as S from "./style";

export default function SwipeButton() {
  return (
    <S.Background>
      <S.BTN>
        Swipe Next
        <span>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </span>
      </S.BTN>
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
