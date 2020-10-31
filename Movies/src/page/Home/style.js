import styled from 'styled-components';

const HomeBackground = styled.div`
  background: ${(props) => (props.colorTheme ? 'black' : 'white')};
`;

export { HomeBackground };
