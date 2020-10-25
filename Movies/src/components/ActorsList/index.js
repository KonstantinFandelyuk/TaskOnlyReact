import React from 'react';
import ActorsItem from './ActorsItem/index';

function ActorsList() {
  return (
    <div>
      <ul>
        {arr.map((item) => (
          <ActorsItem />
        ))}
      </ul>
    </div>
  );
}

export default ActorsList;
