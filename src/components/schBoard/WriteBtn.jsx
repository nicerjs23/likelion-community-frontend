// 게시판 목록 페이지에서 사용되는 버튼
import styled from "styled-components"
import write from '@assets/icons/write.svg'
export const WriteBtn = () => {
    return (
        <Wrapper>
            <Btn>
                <Img src={ write }/>
            </Btn>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    bottom: 85px;
    right: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Btn = styled.div`
    display: flex;
    width: 63px;
    height: 65px;
    padding: 15px 14px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    background: #FF7D2C;
    position: fixed;
    bottom: 20px;
`;

const Img = styled.img`
    width: 35px;
    height: 35px;
`