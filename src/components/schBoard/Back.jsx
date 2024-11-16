import React from 'react'
import styled from 'styled-components'
import lock from '@assets/icons/lock.svg'

export const Back = () => {
  return (
    <Wrapper>
      <Content>
        <Img src={lock} />
        <Text>학교 인증 후 사용 가능합니다</Text>
      </Content>
    </Wrapper>
  )
}

export default Back

export const Wrapper = styled.div` // 인증되지 않았을 때
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1001;
  /* padding: 0 20px; */
  overflow: hidden;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: calc(50vh - 90px);
  left: 50%;
  transform: translateX(-50%);
`

export const Img = styled.img`
  width: 65px;
  height: 65px;
  margin-bottom: 21px;
`

export const Text = styled.div`
  font-size: 17px;
  color: #fff;

`