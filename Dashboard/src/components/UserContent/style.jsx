import styled from "styled-components";

export const ContentContainer = styled.div`
  padding: 40px 45px;
`;

export const ContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const ButtonContainer = styled(ContentTop)`
  justify-content: start;
`;

export const ButtonLeft = styled.button`
  background: transparent;
  background-image: url("/images/icon/left-arrow.png");
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

export const ButtonRight = styled(ButtonLeft)`
  background-image: url("/images/icon/right-arrow.png");
  margin-right: 0px;
`;

export const Search = styled.div`
  position: relative;
  display: flex;
`;

export const InputSearch = styled.input`
  background: white;
  border-radius: 30px;
  border: none;
  padding: 10px 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  flex-basis: 100%;
  order: 1;
  margin-bottom: 10px;
`;

export const LabelSearch = styled.label`
  position: absolute;
  top: 38%;
  right: -10%;
  transform: translate(-50%, -50%);
  width: 35px;
  height: 35px;
  background-color: #345ef2;
  border-radius: 50%;
  background-image: url("/images/icon/search.svg");
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center;
`;

export const PeriodContainer = styled(ContentTop)`
  justify-content: start;
`;

export const PeriodTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  margin-right: 20px;
`;

export const PeriodButton = styled.button`
  font-size: 1.3rem;
  text-transform: uppercase;
  background: transparent;
  padding: 10px 20px;
  border: 1px solid grey;
  border-radius: 20px;
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "black")};
`;
