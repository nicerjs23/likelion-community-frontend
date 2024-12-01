import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  width: 88.89%;
  margin: 0 auto;
`

export const Members = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7.25vh 0 89px 0;
`

export const ChatRoomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LeaveButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  color: white;
  background-color: #e33b3b;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e33b3b;
  }
`