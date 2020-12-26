import React, { useContext, useEffect, useState } from "react";
import ActorsItem from "./ActorsItem/index";
import { Context } from "../../context/Context";
import { NavList, H2Title } from "./style";
import axios from "axios";
import { API_KEY } from "../../api/api_key";

function ActorsList() {
  const [actors, setActors] = useState([]);
  const [titleCategory, setTitleCategory] = useState("Актеры");
  const { language } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if (fetching) {
      axios
        .get(
          `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=${language}&page=${currentPage}`,
        )
        .then((response) => {
          setActors([...actors, ...response.data.results]);
          setCurrentPage((prev) => prev + 1);
          setTotalCount(response.data.total_pages);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      actors.length === totalCount
    ) {
      setFetching(true);
      console.log("scroll :>> ");
    }
    // console.log("Общую высоту страницу с учетом скролла ", e.target.documentElement.scrollHeight);
    // console.log("Текущее положение скрола от верха страницы ", e.target.documentElement.scrollTop);
    // console.log("высота браузера", window.innerHeight);
  };

  return (
    <div>
      <H2Title>{titleCategory}</H2Title>
      <div className="container">
        <NavList>
          {actors.map((item, index) => (
            <ActorsItem item={item} key={index} />
          ))}
        </NavList>
      </div>
    </div>
  );
}

export default ActorsList;
