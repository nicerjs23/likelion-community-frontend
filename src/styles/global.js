import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{box-sizing:border-box}
body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, select, table, td, textarea, th, ul {margin:0;padding:0}
body, button, input, select, table, textarea {font-size:12px;line-height:140%; letter-spacing: -0.025em; color:#202020;font-family: "Pretendard-SemiBold", -apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", helvetica, sans-serif}
h1, h2, h3, h4, h5, h6 {font-size:inherit;line-height:inherit}
textarea {-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:transparent;border:0;word-break:keep-all;word-wrap:break-word}
button, input {-webkit-border-radius:0;border-radius:0;border:0}
button {background-color:transparent}
fieldset, img {border:0}
img {vertical-align:top}
ol, ul {list-style:none}
address, em {font-style:normal}
a {display:flex;text-decoration:none;}
iframe {overflow:hidden;margin:0;border:0;padding:0;vertical-align:top}
mark {background-color:transparent}
i {font-style:normal}

#root {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	min-height: 100vh; /* 뷰포트 높이를 기반으로 설정 */
}

// Pretendard 폰트 설정
@font-face {
    font-family: "Pretendard-Thin";  /* 폰트 패밀리 이름을 개별적으로 지정 */
    src: url("/fonts/Pretendard-Thin.otf") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "Pretendard-Light";  /* Light 폰트 */
    src: url("/fonts/Pretendard-Light.otf") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "Pretendard-Regular";  /* Regular 폰트 */
    src: url("/fonts/Pretendard-Regular.otf") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "Pretendard-Medium";  /* Medium 폰트 */
    src: url("/fonts/Pretendard-Medium.otf") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "Pretendard-SemiBold";  /* SemiBold 폰트 */
    src: url("/fonts/Pretendard-SemiBold.otf") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "Pretendard-Bold";  /* Bold 폰트 */
    src: url("/fonts/Pretendard-Bold.otf") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "Pretendard-ExtraBold";  /* ExtraBold 폰트 */
    src: url("/fonts/Pretendard-ExtraBold.otf") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "Pretendard-Black";  /* Black 폰트 */
    src: url("/fonts/Pretendard-Black.otf") format("opentype");
    font-style: normal;
}

// 초기 html 설정
html {
	background-color: ${({ theme }) => theme.colors.fall};
	display: flex;
	justify-content: center;
	align-items: center;

	-webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgb(0 0 0 / 0%);
    scroll-behavior: smooth; 

	@media (max-width: 360px) {
		font-size:12px;
	}
}

body {
	width: 100%;
	max-width: 540px;
	overflow-x: hidden;
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.default};
	font-family: "Pretendard-Regular", "Pretendard-SemiBold", "Pretendard-Light", "Pretendard-Medium", sans-serif;

}

`;

export default GlobalStyle;
