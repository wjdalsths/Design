import * as S from "./style";

export default function AnimatedCubes() {
  return (
    <S.Background>
      <S.Cube col="#ffa20d">
        <S.Big>
          <S.SPAN num="0" clr="#e2e2e2"></S.SPAN>
          <S.SPAN num="1" clr="#f0f0f0"></S.SPAN>
          <S.SPAN num="2" clr="#e2e2e2"></S.SPAN>
          <S.SPAN num="3" clr="#f0f0f0"></S.SPAN>
          <S.SPAN className="top" clr="#fff"></S.SPAN>
        </S.Big>
      </S.Cube>
      <S.Cube col="#fff" scl="t">
        <S.Big2>
          <S.SPAN2 num="0" clr="#e2e2e2"></S.SPAN2>
          <S.SPAN2 num="1" clr="#f0f0f0"></S.SPAN2>
          <S.SPAN2 num="2" clr="#e2e2e2"></S.SPAN2>
          <S.SPAN2 num="3" clr="#f0f0f0"></S.SPAN2>
          <S.SPAN2 className="top" clr="#fff"></S.SPAN2>
        </S.Big2>
      </S.Cube>
    </S.Background>
  );
}
