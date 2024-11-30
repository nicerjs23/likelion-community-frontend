import styled from "styled-components";

export const PostWrap = styled.div`
  margin-top: 70px;
  width: 100%;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: #ffffff;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.12));
`;

export const Writter = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const User = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 10px;
`;

export const Text = styled.div`
  font-family: ${({ theme }) => theme.fonts.PretendardRegular["font-family"]};
  font-size: 12px;
  color: #323232;
  margin-left: 5px;
`;

export const Id = styled.p``;

export const Time = styled.p``;

export const ModifyWrap = styled.div`
  display: flex;
  align-items: start;
`;

export const Modify = styled.button`
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.PretendardRegular["font-family"]};
  font-size: 12px;
  color: #323232;
  margin: 0 2px;
`;

export const Delete = styled.button`
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.PretendardRegular["font-family"]};
  font-size: 12px;
  color: #323232;
  margin: 0 2px;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.PretendardSemiBold["font-family"]};
  font-size: 15px;
  color: #111111;
  margin-bottom: 10px;
`;

export const Content = styled.p`
  font-family: ${({ theme }) => theme.fonts.PretendardMedium["font-family"]};
  font-size: 12px;
  color: #323232;
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Img = styled.img`
  width: 50%;
  margin: 10px;
`;

export const Button = styled.div`
  display: flex;
  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.PretendardRegular["font-family"]};
    font-size: 10px;
    color: #767676;
    margin-top: 10px;
    padding: 2px 5px;
    border-radius: 5px;
  }
`;

export const Like = styled.button`
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s, color 0.3s; /* 부드러운 전환 효과 */
  background-color: ${(props) => (props.liked ? "#fde4c6" : "#EFEFEF")};
  span {
    color: ${(props) => (props.liked ? "#ff7d2c" : "#767676")};
  }
`;

export const Scrap = styled.button`
  cursor: pointer;
  background-color: ${({ scrapped }) => (scrapped ? "#fde4c6" : "#EFEFEF")};
  span {
    color: ${({ scrapped }) => (scrapped ? "#ffa232" : "#767676")};
  }
`;
