import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { sliceDate, defaultNoImage } from "../../helpers/helpers";
import {
  SearchPageBlock,
  BlockTop,
  Poster,
  PosterTitle,
  DateTitle,
  PosterText,
  GenresList,
  GenresItem,
  Description,
  PosterSubTitle,
  Raiting,
  RaitingTitle,
  Wrapper,
  CreatedBy,
  CreatedByTitle,
} from "./style";
import ReactStars from "react-rating-stars-component";

const SearchPage = () => {
  const { searchItem } = useContext(Context);
  const {
    poster_path,
    backdrop_path,
    name,
    first_air_date,
    overview,
    genres,
    tagline,
    vote_average,
    created_by: createdBy,
  } = searchItem;
  console.log("searchItem :>> ", createdBy);
  return (
    <SearchPageBlock>
      <Wrapper img={backdrop_path || defaultNoImage}>
        <div className="container">
          <BlockTop>
            <Poster>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`
                    : defaultNoImage
                }
                alt={name}
              />
            </Poster>
            <PosterText>
              <PosterTitle>
                {name} ({<DateTitle>{sliceDate(first_air_date)}</DateTitle>})
              </PosterTitle>
              <Raiting>
                <RaitingTitle>Рейтинг</RaitingTitle>
                <ReactStars
                  value={vote_average / 10}
                  count={10}
                  size={20}
                  edit={false}
                  activeColor="yellow"
                  color="yellow"
                  half={true}
                />
              </Raiting>
              <PosterSubTitle>{tagline}</PosterSubTitle>
              <GenresList>
                {genres?.map((item, index) => (
                  <GenresItem key={index}>{item.name}</GenresItem>
                ))}
              </GenresList>
              <Description>{overview}</Description>
              <CreatedBy>
                <CreatedByTitle>Создатели:</CreatedByTitle>
                <ul>
                  {createdBy?.map((item, index) => (
                    <li key={index}>{item.name}</li>
                  ))}
                </ul>
              </CreatedBy>
            </PosterText>
          </BlockTop>
          <div className="MiddleBloack">
            <div className="Sesoan"></div>
          </div>
        </div>
      </Wrapper>
    </SearchPageBlock>
  );
};

export default SearchPage;
