import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 32px;
  background-color: #ffffff;
  gap: 5px;
`;

const Text = styled.div`
  display: flex;
  font-size: 14px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  color: #111111;
  margin-right: 2px;
`;

const BoxInput = styled.input`
  width: 30px;
  height: 30px;
  border: 2px solid #ff7710;
  border-radius: 10px;
  text-align: center;
  color: #ffffff;
  background-color: ${(props) =>
    props.$isFilled ? "#ff7710" : "#ffffff"};
  font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
  font-size: 22px;
  transition: border-color 0.3s;
  &:focus {
    outline: none;
  }
`;

const AdminAttCode = ({ code, setCode }) => {
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // 숫자만 허용

    const newCode = [...code];
    newCode[index] = value.slice(-1); // 마지막 숫자만 사용
    setCode(newCode);

    // 다음 인풋으로 자동 포커스
    if (value && index < code.length - 1) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }
  };

  return (
    <InputWrapper>
      <Text>출석코드를 입력해주세요 : </Text>
      {code.map((num, index) => (
        <BoxInput
          key={index}
          id={`code-input-${index}`}
          value={num}
          onChange={(e) => handleChange(e, index)}
          maxLength={1}
          $isFilled={!!num}
        />
      ))}
    </InputWrapper>
  );
};

export default AdminAttCode;
