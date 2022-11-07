import * as S from "./style";

export default function ChangeBackground() {
  const changeClick = (props) => {
    this.addClass("active");
  };
  return (
    <S.Background>
      <S.Colors>
        <S.Span onClick={changeClick} clr="#1dd1a1"></S.Span>
        <S.Span onClick={changeClick} clr="#ff6b6b"></S.Span>
        <S.Span onClick={changeClick} clr="#2e86de"></S.Span>
        <S.Span onClick={changeClick} clr="#f368e0"></S.Span>
        <S.Span onClick={changeClick} clr="#ff9f43"></S.Span>
      </S.Colors>
    </S.Background>
  );
}
