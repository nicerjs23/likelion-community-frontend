import styled from "styled-components";

export const InputBox = ({ title, placeholder, icon, type = "text", value, onChange, toggleIcon, onToggleClick }) => {
  return (
    <InputWrapper>
      <InputLabel>{title}</InputLabel>
      <InputWrap>
        {icon && <Icon src={icon} alt={`${title} icon`} />}
        <Input placeholder={placeholder} type={type} value={value} onChange={onChange} />
        {toggleIcon && (
          <Toggle onClick={onToggleClick}>
            <img src={toggleIcon} alt="visibility toggle" />
          </Toggle>
        )}
      </InputWrap>
    </InputWrapper>
  );
};

// input 이름 + input 입력 박스 묶음
export const InputWrapper = styled.div``;

// input 박스 이름
export const InputLabel = styled.label`
  font-family: ${({ theme }) => theme.fonts.PretendardMedium["font-family"]};
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  margin-left: 10px;
`;

// input 입력하는 박스
export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  padding: 20px;
  margin: 10px 0 20px 0;
  background-color: #fff;

  &:focus-within {
    background-color: #f2e0ca;
    border: 3px solid #f7941e;
  }
`;

// input
export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 17px;
  font-family: ${({ theme }) => theme.fonts.PretendardMedium["font-family"]};
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  margin-left: 8px;
  background-color: transparent;

  &::placeholder {
    color: #a9a9a9;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const Toggle = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  margin-left: 8px;
`;
