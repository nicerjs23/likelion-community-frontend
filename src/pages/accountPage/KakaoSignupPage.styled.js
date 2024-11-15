import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContentWrap = styled.div`
  width: 85vw;
  max-width: 450px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
  font-size: 18px;
  color: #000000;
  margin-bottom: 10px;
  align-self: flex-start;
`;

export const SampleImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;

  p {
    font-family: ${({ theme }) =>
      theme.fonts.PretendardSemiBold["font-family"]};
    font-size: 13px;
    color: #000000;
    align-self: flex-start;
    margin-bottom: 20px;
  }

  img {
    display: block;
  }

  .Notice {
    font-family: ${({ theme }) =>
      theme.fonts.PretendardMedium["font-family"]};
    font-size: 10px;
    color: #000000;
    text-align: center;
    align-self: center;
    margin-top: 35px;
    margin-bottom: 10px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`;

export const InputBox = styled.div`
  width: 65%;
  height: 100%;
  color: #d9d9d9;
`;

export const InputImg = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px;
  border-radius: 20px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;

  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) center;
`;

export const FileInput = styled.input`
  display: block;
  width: 0;
  height: 0;
  opacity: 0;
`;

export const FileName = styled.span`
  font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
  font-size: 14px;
  color: #333;
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px; /* 파일명이 너무 길 때 잘리도록 최대 너비 설정 */
`;

export const Confirm = styled.button`
  width: 30%;
  height: 100%;
  border-radius: 20px;
  background-color: #d9d9d9;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.12);
`;

export const CompleteMessage = styled.p`
  color: #26b01f;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
  font-size: 15px;
  text-align: center;
  margin-top: 15px;
`;

export const LogIn = styled.div`
  text-align: center;
  color: #a9a9a9;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
  font-weight: 500;
  font-size: 16px;
  padding-bottom: 50px;

  .text {
    margin-right: 5px;
  }

  // 로그인 화면으로 이동
  .underline {
    color: #f7941e;
    text-decoration-line: underline;
    cursor: pointer;
  }
`;
