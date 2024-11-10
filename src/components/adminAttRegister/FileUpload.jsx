import { useState } from "react";
import styled from "styled-components";
import fileIcon from "@assets/icons/file.svg";

const FileUploadContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  background: rgba(247, 148, 30, 0.25);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);

  border-radius: 32px;
  cursor: pointer;
`;

const UploadText = styled.span`
  display: flex;

  flex-grow: 1;
  font-size: 12px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  color: #999999;
`;

const UploadIcon = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
  margin-left: 8px;
`;

const HiddenInput = styled.input`
  display: none; // 숨김 처리
`;

const FileUpload = ({ setFile }) => {
  const [fileName, setFileName] = useState("파일을 업로드 해주세요");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // 파일 이름으로 텍스트 변경
      setFile(file); // 파일 객체를 업데이트
    }
  };

  return (
    <FileUploadContainer>
      <UploadText>{fileName}</UploadText>
      <label htmlFor="file-input">
        <UploadIcon src={fileIcon} alt="파일 업로드 아이콘" />
      </label>
      <HiddenInput
        id="file-input"
        type="file"
        onChange={handleFileChange}
      />
    </FileUploadContainer>
  );
};

export default FileUpload;
