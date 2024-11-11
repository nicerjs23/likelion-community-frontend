// 작성 시간, 작성자 이름, 댓글 수, 추천 수
import styled from 'styled-components'
export const BoardInfo = ({time, name, comment, recommend}) => {
    return (
        <Wrapper>
            { time }분 전 | { name } | 댓글 { comment } | 추천 
            <Color>{ recommend }</Color>
        </Wrapper>

    )
}

const Wrapper = styled.div`
    display: flex;
    color: #767676;
    font-size: 10px;
`

const Color = styled.p`
    color: #FF7D2C;
    padding-left: 2px;
`