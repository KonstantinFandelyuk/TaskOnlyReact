import styled from "styled-components";

const HeaderWrapper = styled.header`
  background: #032541;
  color: white;
`;

const HeaderList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 15px 15px;
`;

const HeaderListItem = styled.div`
  flex-basis: ${(props) => (props.logo ? "5%" : "70%")};
  position: relative;
`;

export { HeaderWrapper, HeaderList, HeaderListItem };
