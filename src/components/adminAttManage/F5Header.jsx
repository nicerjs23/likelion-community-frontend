//헤더
import styled, { keyframes } from "styled-components";
import back from "@assets/icons/back.svg";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import f5 from "@assets/icons/f5.svg";
import { useState } from "react";

export const F5Header = ({ title }) => {
  const { goBack } = useCustomNavigate();
  const [isRotating, setIsRotating] = useState(false);

  const handleF5Click = () => {
    // F5 아이콘을 클릭할 때 회전 애니메이션 실행
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false); // 회전 애니메이션 멈추기
      window.location.reload(); // 화면 새로고침
    }, 1000); // 1초 동안 회전
  };
  return (
    <Wrapper>
      <Content>
        <IconWrapper onClick={goBack}>
          <img className="back" src={back} alt="back icon" />
        </IconWrapper>

        <Title>{title}</Title>
        <IconWrapper onClick={handleF5Click}>
          <F5 src={f5} alt="F5Icon" $isRotating={isRotating} />
        </IconWrapper>
      </Content>
    </Wrapper>
  );
};
// 회전 애니메이션 정의
const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;
const Wrapper = styled.div`
  max-width: 540px;
  position: fixed; /* 화면에 고정 */
  top: 0; /* 상단에 위치 */
  /* left: 0;
  right: 0; */
  display: flex;
  width: 100vw;
  height: 7.25vh;
  z-index: 1000;
  background-color: #f1f3f5; //#F1F3F5
  /* border: solid 1px blue; */
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88.89%;
  margin: 0 auto;
  /* border: solid 1px red; */
  .back {
    cursor: pointer;
    width: 12px;
    height: 24px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 32px; /* 동일한 크기 설정 */
  height: 32px; /* 동일한 크기 설정 */
  cursor: pointer;
`;
const Title = styled.div`
  display: flex;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  font-size: 20px;
`;

const F5 = styled.img`
  display: flex;
  width: 28px;
  height: 28px;
  animation: ${(props) => (props.$isRotating ? rotate : "none")} 0.5s
    linear;
`;
