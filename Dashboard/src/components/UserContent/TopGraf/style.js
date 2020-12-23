import styled from "styled-components";

export const GrafContainer = styled.div`
  display: flex;
`;

export const GrafBig = styled.div`
  min-width: 450px;
  max-height: 230px;
  background: white;
  border-radius: 20px;
  margin-right: 40px;
  box-shadow: 0px 0px 11px 4px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
`;

export const MonthlyGrafGoal = styled.div`
  width: 150px;
  max-height: 230px;
  border-radius: 20px;
  box-shadow: 0px 0px 11px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  color: black;
  text-align: center;
  margin-right: 40px;
`;

export const MonthlyGrafGoalCircle = styled.div`
  border-radius: 50%;
  border: 1px solid white;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  font-size: 1.9rem;
`;

export const Average = styled.div`
  box-shadow: 0px 0px 11px 4px rgba(0, 0, 0, 0.1);
  margin: 10px auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: white; */
  background: linear-gradient(to right, #345ef2 40%, transparent 0);
  background-color: white;
  width: 100px;
  height: 100px;
  /* background-image: conic-gradient(deeppink 10%, transparent 0); */
  background-image: ${(props) => `conic-gradient(#345ef2 ${props.average}%, transparent 0)`};
  border: 1px solid white;
  transition: 0.6s linear;
  position: relative;
  &::before {
    content: ${(props) => `${props.average}%`};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
  }
`;

export const MonthlyGrafGoalImage = styled.img`
  max-width: 40px;
  margin-bottom: 10px;
`;

export const MonthlyGrafGoalTitle = styled.div`
  font-size: 1.2rem;
  font-style: italic;
  opacity: 0.5;
  margin-bottom: 15px;
`;

export const MonthlyGrafGoalNumber = styled.div`
  font-size: 2rem;
  margin-bottom: 15px;
  font-weight: 600;
`;

export const TwoGrafContainer = styled.div``;

export const LikeContainer = styled.div`
  padding: 10px 0;
  width: 150px;
  height: 110px;
  background: white;
  border-radius: 20px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 11px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
export const LikeImage = styled.img`
  max-width: 50px;
  margin-bottom: 10px;
`;
export const LikeTitle = styled.div`
  color: black;
  font-size: 1.2rem;
  font-style: italic;
  opacity: 0.5;
`;
export const LikeNumber = styled.div`
  color: black;
  font-size: 2rem;
  margin-bottom: 15px;
  font-weight: 600;
`;

export const CommentsContainer = styled(LikeContainer)`
  margin-bottom: 0;
`;
export const CommentsImage = styled(LikeImage)``;
export const CommentsTitle = styled(LikeTitle)``;
export const CommentseNumber = styled(LikeNumber)``;
