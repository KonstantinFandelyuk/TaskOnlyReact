import React, { useContext, useEffect, useState, useMemo } from 'react';
import ActorsItem from './ActorsItem/index';
import { getPersonalActor } from '../../api/api';
import { Context } from '../../context/Context';
import { NavList, H2Title } from './style';

function ActorsList() {
  const [actors, setActors] = useState([]);
  const [titleCategory, setTitleCategory] = useState('Актеры');
  const { language, page, theme } = useContext(Context);

  useEffect(() => {
    const getDataActors = async () => {
      const data = await getPersonalActor(language, page);
      if (data !== undefined) {
        setActors(data.results);
      } else {
        console.log('Не получили данные с актерами');
      }
    };
    getDataActors();
  }, []);

  return (
    <div colorTheme={theme}>
      <H2Title colorTheme={theme}>{titleCategory}</H2Title>
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
