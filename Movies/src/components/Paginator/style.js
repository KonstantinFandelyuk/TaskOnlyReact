import styled from 'styled-components';

const Container = styled.div`
  text-align: right;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
`;

const NextPageButton = styled.button`
  background: transparent;
  position: relative;
  color:${(props) => (props.theme.mode === 'dark' ? '#fff' : 'black')};
}
`;
const PrevPageButton = styled.button`
  background: transparent;
  position: relative;
  color: ${(props) => (props.theme.mode === 'dark' ? '#fff' : 'black')};
`;

export { Container, NextPageButton, PrevPageButton };
