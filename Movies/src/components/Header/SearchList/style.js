import styled from "styled-components";

const Search = styled.div`
  position: absolute;
  top: 30px;
  right: 187px;
  background: white;
  width: 300px;
  z-index: ${(props) => (props.list ? -1 : 11)};
  padding: 15px;
  opacity: ${(props) => (props.list ? 0 : 1)};
  border-radius: 0px 0px 10px 10px;
  max-height: 300px;
  overflow-y: scroll;
  &::-webkit-scrollbar-thumb {
    background: lightgray;
  }
  &::-webkit-scrollbar {
    width: 5px;
  }
`;

export { Search };
