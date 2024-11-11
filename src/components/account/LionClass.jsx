// 기수 드롭다운
import styled from "styled-components";

export const LionClass = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Label>기수</Label>
      <Wrap>
        <Select value={value} onChange={onChange}>
          <option value="">기수를 선택해 주세요</option>
          {/* 기본값을 빈 문자열로 설정 */}
          <option value="12">12기</option>
          <option value="11">11기</option>
          <option value="10">10기</option>
          <option value="9">기타</option>
        </Select>
      </Wrap>
    </Wrapper>
  );
};

export const Wrapper = styled.div``;

export const Label = styled.label`
  font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  margin-left: 10px;
`;

export const Wrap = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 20px;
  padding: 20px;
  margin: 5px 0 20px 0;
  background-color: #fff;
`;

export const Select = styled.select`
  width: 100%;
  outline: none;
  border: none;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  background-color: #ffffff;
`;
