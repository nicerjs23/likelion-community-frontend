import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  width: 88.89%;
  margin: 0 auto;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background: #fff;
  margin-top: 7.25vh;
  margin-bottom: 24px;
  width: 100%;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid black;
  object-fit: cover;
`;

export const Top = styled.div`
  display: flex;
  gap: 7px;
`;
export const Mid = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;
export const Bottom = styled.div`
  font-size: 15px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.PretendardBold["font-family"]};
`;

export const Edit = styled.div`
  color: #999999;
  font-size: 14px;
`;

export const Name = styled.div`
  font-size: 15px;
`;

export const Badge = styled.div`
  border-radius: 10px;
  background: #d9d9d9;
  padding: 3px 10px;
`;

export const School = styled.div`
  position: relative;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  padding: 25px;
  width: 100%;
  margin-bottom: 24px;
`;

export const SchoolName = styled.div`
  font-family: ${({ theme }) => theme.fonts.PretendardSemiBold["font-family"]};
  font-size: 16px;
  display: flex;
  align-items: center;
`;

export const SchoolBadge = styled.div`
  border-radius: 10px;
  background: #d9d9d9;
  padding: 3px 10px;
  font-family: ${({ theme }) => theme.fonts.PretendardRegular["font-family"]};
  font-size: 13px;
  margin-left: 7px;
`;

export const SchoolVerify = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.78);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 14px;
  text-align: center;

  button {
    color: #fff;
    margin-top: 3px;
    font-family: ${({ theme }) => theme.fonts.PretendardRegular["font-family"]};
  }
`;
export const UploadIcon = styled.div`
  width: 13px;
  height: 13px;
  margin-left: 10px;
`;

export const Guide = styled.div`
  display: flex;
  align-items: center;
`;

export const Mypost = styled.div`
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  width: 100%;
  padding: 12px 20px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.PretendardMedium["font-family"]};
  margin-bottom: 24px;
`;

export const Post = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
export const Comment = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
export const Scrap = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const PostImg = styled.img`
  width: 22px;
  height: 22px;
`;

export const MypostTitle = styled.p`
  font-size: 16px;
  color: #000;
  text-decoration: none;

  &:active,
  &:focus,
  &:visited {
    color: #000;
    text-decoration: none;
  }
`;

export const User = styled.div`
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background: #fff;
  display: flex;
  padding: 12px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const Btn = styled.button`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.PretendardMedium["font-family"]};
  cursor: pointer;
`;
