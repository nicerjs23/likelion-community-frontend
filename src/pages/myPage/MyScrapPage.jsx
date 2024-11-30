// 스크랩 페이지

import React from "react";
import * as S from "./MyPostPage.styled";
import { Header } from "@components/Header";
import { MyPagePost } from "@components/myPage/MyPagePost";
import { MyPostData } from "../../constant/myPage/myPostData";

export const MyScrapPage = () => {
  const [MyScrappedData, setMyScrappedData] = useState([]);

  // 게시글 클릭하면 이동하는 게시판
  const boardPaths = {
    자유게시판: "/defaultPostPage",
    "프론트엔드 게시판": "/fePostPage",
    "백엔드 게시판": "/bePostPage",
    "기획/디자인 게시판": "/pmPostPage",
    아기사자게시판: "/lionPostPage",
    "이벤트/공지게시판": "/notiPostPage",
    참여게시판: "/joinPostPage",
    // 학교
    전체게시판: "/schDefaultPostPage",
    질문게시판: "/qnaPostPage",
  };

  const getMyCommentData = async () => {
    try {
      const response = await axiosInstance.get("/mypage/myscraps/");
      console.log("post Response", response.data);

      const { maincomment, schoolcomment, questioncomment } = response.data;
      console.log("데이터는", response.data);

      // 세 배열을 합쳐 하나의 배열로 상태에 저장
      const combinedPosts = [
        ...(Array.isArray(maincomment) ? maincomment : []),
        ...(Array.isArray(schoolcomment) ? schoolcomment : []),
        ...(Array.isArray(questioncomment) ? questioncomment : []),
      ];

      setMyCommentData(combinedPosts);
    } catch (error) {
      console.error("error", error);
      alert("게시물을 불러오는 중 문제가 발생했습니다.");
    }
  };

  useEffect(() => {
    getMyCommentData();
  }, []);

  return (
    <S.Wrapper>
      <Header title="스크랩" />
      <S.Posts>
        {MyPostData.map((post, index) => (
          <MyPagePost
            key={index}
            board_title={post.board_title}
            title={post.title}
            content={post.content}
            image_url={post.image_url}
            comments_count={post.comments_count}
            time={post.time}
            writer={post.writer}
          />
        ))}
      </S.Posts>
    </S.Wrapper>
  );
};

export default MyScrapPage;
