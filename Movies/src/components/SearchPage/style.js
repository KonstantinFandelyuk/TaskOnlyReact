import styled from "styled-components";

export const SearchPageBlock = styled.div`
  height: 100vh;
  color: white;
`;

export const Wrapper = styled.div`
  background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${props.img})`};
  background-position: center top;
  background-size: cover;
  height: 600px;
  position: relative;
  padding: 100px 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, rgb(29 16 16 / 66%), rgb(43 43 43 / 93%));
  }
  z-index: 1;
`;

export const BlockTop = styled.div`
  display: flex;
  /* align-items: center; */
  position: relative;
`;

export const Poster = styled.div`
  flex-basis: 22%;
  z-index: 2;
`;
export const PosterText = styled.div`
  margin-left: 20px;
  z-index: 2;
  max-width: 680px;
`;

export const PosterTitle = styled.h1`
  font-weight: 600;
  font-size: 3.2rem;
  margin-bottom: 20px;
`;

export const Raiting = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const RaitingTitle = styled.div`
  margin-right: 15px;
  font-size: 2rem;
`;

export const PosterSubTitle = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-style: italic;
  opacity: 0.8;
`;

export const DateTitle = styled.span`
  font-weight: 400;
  font-size: 3.2rem;
`;

export const GenresList = styled.ul`
  display: flex;
  margin-left: -10px;
  margin-bottom: 20px;
`;

export const GenresItem = styled.li`
  margin-left: 10px;
  padding: 5px;
  border: 1px solid grey;
  cursor: pointer;
  transition: 0.6s linear;
  &:hover {
    background: grey;
    color: white;
    transition: 0.6s linear;
    border: 1px solid white;
  }
`;

export const Description = styled.p`
  line-height: 1.3;
  margin-bottom: 20px;
`;

export const CreatedBy = styled.div`
  display: flex;
  align-items: center;
`;

export const CreatedByTitle = styled.div`
  font-size: 1.5rem;
  margin-right: 10px;
  font-style: italic;
  opacity: 0.8;
`;
