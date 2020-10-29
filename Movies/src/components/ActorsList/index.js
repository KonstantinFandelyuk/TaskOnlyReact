import React from 'react';
import ActorsItem from './ActorsItem/index';

const arrTest = [1, 2, 3, 4, 5, 6];
function ActorsList(props) {
  return (
    <div>
      <ul>
        {arrTest.map((item, index) => (
          <ActorsItem item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ActorsList;
