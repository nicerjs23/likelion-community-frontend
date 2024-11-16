//헤더
import styled from "styled-components";
import back from "@assets/icons/back.svg";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
export const Header = ({ title }) => {
  const { goBack } = useCustomNavigate();

  return (
    <Wrapper>
      <Content>
        <img onClick={goBack} src={back} alt="back icon" />
        <Title>{title}</Title>
        <div className="fake"></div>
      </Content>
    </Wrapper>
  );
};

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
  img {
    cursor: pointer;
    width: 12px;
    height: 24px;
  }
  .fake {
    //중앙맞추기용 가짜 div
    width: 12px;
    height: 5px;
  }
`;
const Title = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.PretendardSemiBold["font-family"]};
  font-size: 20px;
`;
