//운영진 출석등록 글쓰기 박스 컴포넌트
import * as S from "./AdminAttPost.styled.js";
import { Dropdown } from "@components/adminAtt/Dropdown.jsx";
import postIcon from "@assets/icons/postIcon.svg";
import FileUpload from "@components/adminAttRegister/FileUpload.jsx";

export const AdminAttPost = ({
  setDropdownValue,
  setTitle,
  setDate,
  setTime,
  setBody,
  setFile,
}) => {
  const filterData = {
    data: ["전체트랙", "프론트엔드", "백엔드", "기획/디자인"],
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderIcon src={postIcon} alt="HeaderIcon" />
      </S.Header>
      <S.InputSection>
        <S.InputSectionGap>
          <Dropdown
            props={filterData}
            onChange={(value) => setDropdownValue(value)}
          />
          <S.InputTitle
            placeholder="제목을 입력해 주세요"
            onChange={(e) => setTitle(e.target.value)}
          />
        </S.InputSectionGap>
        <S.InputSectionGap $gap10>
          <S.InputDate onChange={(e) => setDate(e.target.value)} />
          <S.InputTime onChange={(e) => setTime(e.target.value)} />
        </S.InputSectionGap>
        <S.InputSectionGap $gap10>
          <S.TimeDiv>
            <S.TimeText>
              지각기준(분):
              <S.LateTime type="number" placeholder="ex 10" />
            </S.TimeText>
          </S.TimeDiv>
          <S.TimeDiv>
            <S.TimeText>
              결석기준(분):
              <S.AbsentTime placeholder="ex 30" />
            </S.TimeText>
          </S.TimeDiv>
        </S.InputSectionGap>
        <S.TextareaBody
          placeholder="내용을 입력해 주세요"
          onChange={(e) => setBody(e.target.value)}
        />
        <FileUpload setFile={setFile} />
      </S.InputSection>
    </S.Wrapper>
  );
};
