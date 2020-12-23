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
import { LineChart, Line, Legend, Tooltip } from "recharts";
import { observer } from "mobx-react-lite";

const data = [
  {
    name: "Page A",
    msg: 9400,
  },
  {
    name: "Page B",
    msg: 1398,
  },
  {
    name: "Page C",
    msg: 9800,
  },
  {
    name: "Page D",
    msg: 3908,
  },
  {
    name: "Page E",
    msg: 6008,
  },
  {
    name: "Page F",
    msg: 3008,
  },
  {
    name: "Page G",
    msg: 1008,
  },
  {
    name: "Page K",
    msg: 1008,
  },
];

export const TopGraf = observer(() => {
  const { commentsNumber, postNumber, userLikes } = UserAPI.currentUser;

  return (
    <GrafContainer>
      <GrafBig>
        <LineChart width={450} height={200} data={data}>
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line type="monotone" dataKey="msg" stroke="grey" strokeWidth={2} />{" "}
        </LineChart>
      </GrafBig>
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
