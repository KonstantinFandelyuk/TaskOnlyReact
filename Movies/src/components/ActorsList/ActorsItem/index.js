import React from 'react';
import { NavListItem, ActorName, ActorCard, ActorInfo, Drpo } from './style';

function ActorsItem({ item }) {
  const switchGender = (gender) => {
    if (gender === 2) {
      return 'Male';
    } else {
      return 'Female';
    }
  };

  return (
    <NavListItem>
      <ActorCard>
        <ActorInfo>i</ActorInfo>
        <Drpo className="infoAcmenu">
          <div>{switchGender(item.gender)}</div>
          <div>Rating: {Math.floor(item.popularity)}</div>
        </Drpo>
        <div className="img">
          <img src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`} alt="" />
        </div>
        <ActorName>{item.name}</ActorName>
      </ActorCard>
    </NavListItem>
  );
}

export default ActorsItem;

// adult: false
// gender: 1
// id: 4494
// known_for: (3) [{…}, {…}, {…}]
// known_for_department: "Acting"
// name: "Lisa Ann Walter"
// popularity: 56.512
// profile_path: "/p3wxUblbPwRVzTp7jW1lXISKIob.jpg"
