import * as S from "./style";

export default function Graph() {
  return (
    <S.Background>
      <S.Gauge>
        <S.Progress>
          <S.Bar></S.Bar>
          <S.Neele></S.Neele>
        </S.Progress>
      </S.Gauge>
    </S.Background>
  );
}
