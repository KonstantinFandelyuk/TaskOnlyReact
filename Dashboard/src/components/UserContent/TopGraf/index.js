import React from "react";
import {
  GrafContainer,
  GrafBig,
  MonthlyGrafGoal,
  MonthlyGrafGoalCircle,
  MonthlyGrafGoalImage,
  MonthlyGrafGoalTitle,
  MonthlyGrafGoalNumber,
  TwoGrafContainer,
  LikeContainer,
  LikeImage,
  LikeTitle,
  LikeNumber,
  CommentsContainer,
  CommentsImage,
  CommentsTitle,
  CommentseNumber,
  Average,
} from "./style";
import UserAPI from "../../../store/UserAPI";
import { observer } from "mobx-react-lite";

export const TopGraf = observer(() => {
  const { commentsNumber, postNumber, userLikes } = UserAPI.currentUser;
  return (
    <GrafContainer>
      <GrafBig></GrafBig>
      <MonthlyGrafGoal>
        <Average average={postNumber / 10}></Average>
        <MonthlyGrafGoalImage src="/images/icon/statistic/bar-chart.png" alt="" />
        <MonthlyGrafGoalTitle>Mouthly shot goal</MonthlyGrafGoalTitle>
        <MonthlyGrafGoalNumber>{postNumber}</MonthlyGrafGoalNumber>
      </MonthlyGrafGoal>
      <TwoGrafContainer>
        <LikeContainer>
          <LikeImage src="/images/icon/statistic/analytics.png" alt="" />
          <LikeTitle>Comments</LikeTitle>
          <LikeNumber>{userLikes}</LikeNumber>
        </LikeContainer>
        <CommentsContainer>
          <CommentsImage src="/images/icon/statistic/analytics.png" alt="" />
          <CommentsTitle>Comments</CommentsTitle>
          <CommentseNumber>{commentsNumber}</CommentseNumber>
        </CommentsContainer>
      </TwoGrafContainer>
    </GrafContainer>
  );
});
