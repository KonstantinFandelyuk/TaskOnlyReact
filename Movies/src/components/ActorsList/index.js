import React, { useContext } from 'react';
import ActorsItem from './ActorsItem/index';
import { Context } from '../../context/Context';

const arrTest = [1, 2, 3, 4, 5, 6];
function ActorsList(props) {
  const { toggleFavorite } = useContext(Context);
  return (
    <div>
      {toggleFavorite}
      <ul>
        {arrTest.map((item, index) => (
          <ActorsItem item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ActorsList;
