import styled from "styled-components";

const LogoList = styled.div`
  display: flex;
  align-items: center;
`;

const LogoListItem = styled.div`
  width: ${(props) => (props.active ? "40px" : "100px")};
  margin-right: ${(props) => (props.active ? "10px" : "0")};
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

export { LogoList, LogoText, LogoListItem };
