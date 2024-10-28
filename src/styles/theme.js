const fontGenerator = (
  fontFamily,
  fontSize = "1rem", //기본폰트크기
  fontWeight = "400", //기본두께
  lineHeight = "140%", // 행간140% 원래기본은 1.5
  letterSpacing = "-0.025em" //자간-2.5% 원래기본은 normal
) => ({
  "font-family": fontFamily,
  "font-size": fontSize,
  "font-weight": fontWeight,
  "line-height": lineHeight,
  "letter-spacing": letterSpacing,
});
export const theme = {
  colors: {
    // 테마 및 배경 색상
    bgGradient: "linear-gradient(to bottom, #FF7710, #FFE4CA)", //웰컴페이지 그라데이션배경색

    fall: "#ED6308", // 가을 테마 색상
    // bottomDefault: "#FF9D52", // 하단 기본 색상
    // boothLocation: "#FFD5D5", // 부스 위치 색상
    // boothType: "#FFD9A1", // 부스 타입 색상

    // 폰트 색상
    // dayBoothFont: "#6D5C00", // 낮 부스 폰트 색상
    // nightBoothFont: "#00326D", // 밤 부스 폰트 색상
    // boothLocationFont: "#FF0000", // 부스 위치 폰트 색상 (빨간색)
    // boothTypeFont: "#FFD9A1", // 부스 타입 폰트 색상

    // 추가적인 색상
    // subText: "#2A2A2A", // 보조 텍스트 색상 (rgba 변환)
    // siteLink: "#EB8F00", // 사이트 바로가기 링크 색상
    // buttonFall: "#FF6601", // 가을 버튼 색상

    // noneSelected: "#B6B6B6", // 선택되지 않은 상태 색상
    // separator: "#FFBA85", // 구분선 색상
    // detailText: "#5A5A5A", // 상세 텍스트 색상
    default: "#000000", // 기본 검정색
    white: "#FFFFFF",
  },

  fonts: {
    default: fontGenerator(
      "Pretendard-SemiBold",
      "1rem",
      "400",
      "140%",
      "-0.025em"
    ),

    // Pretendard 폰트 설정
    PretendardThin: fontGenerator("Pretendard-Thin"),
    PretendardLight: fontGenerator("Pretendard-Light"),
    PretendardRegular: fontGenerator("Pretendard-Regular"),
    PretendardMedium: fontGenerator("Pretendard-Medium"),
    PretendardSemiBold: fontGenerator("Pretendard-SemiBold"),
    PretendardBold: fontGenerator("Pretendard-Bold"),
    PretendardExtraBold: fontGenerator("Pretendard-ExtraBold"),
    PretendardBlack: fontGenerator("Pretendard-Black"),
  },
};
