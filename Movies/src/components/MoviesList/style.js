import styled from 'styled-components';

const H2Title = styled.h2`
  text-align: center;
  font-size: 5rem;
  font-weight: 400;
  margin-bottom: 40px;
  color: ${(props) => (props.colorTheme ? 'white' : 'black')};
`;

const FilmsList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export { H2Title, FilmsList };
