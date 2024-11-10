//운영진 출석페이지
import * as S from "./AdminAttPage.styled";
import { Header } from "@components/Header";
import { Dropdown } from "@components/adminAtt/Dropdown";
import adminPen from "@assets/icons/adminPen.svg";
import { AttCard } from "@components/adminAtt/AttCard";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
const filterData = {
  data: ["트랙선택", "프론트엔드", "백엔드", "기획/디자인"],
};

export const AdminAttPage = () => {
  const { goTo } = useCustomNavigate();

  return (
    <S.Wrapper>
      <Header title="출석" />
      {/* 요소들 묶어둔 콘텐츠 태그 */}
      <S.Content>
        {/* 액션바들 묶음 */}
        <S.ActionBar>
          <Dropdown props={filterData} />
          <S.WriteBtn onClick={() => goTo("/adminAttRegister")}>
            글쓰기
            <S.AdminPenIcon src={adminPen} alt="penIcon" />
          </S.WriteBtn>
        </S.ActionBar>
        <S.CardWrapper>
          <AttCard
            isOpen={1}
            onClick={() => goTo("/adminAttManage")}
          />
          <AttCard />
          <AttCard />
          <AttCard />
          <AttCard />
          <AttCard />
          <AttCard />
          <AttCard />
        </S.CardWrapper>
      </S.Content>
    </S.Wrapper>
  );
};
