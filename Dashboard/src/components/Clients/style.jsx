import styled from "styled-components";

export const ClientsBlock = styled.div`
  padding: 100px 10px;
`;

export const ClientsTitle = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 4px;
`;

export const ClientsList = styled.ul`
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  height: 700px;
  overflow-y: scroll;
`;

export const ClientsItem = styled.li`
  border-bottom: 1px solid grey;
  padding: 5px 0;
  min-width: 200px;
`;

export const TableTitle = styled.ul`
  display: flex;
  text-align: center;
`;
export const TableTitleName = styled(ClientsItem)`
  border-top: 0px solid grey;
  border-bottom: 0px solid grey;
`;
