import React, { useState } from "react";
import { NavListItem, ActorName, ActorCard, ActorInfo, Drpo } from "./style";
import ReactStars from "react-rating-stars-component";
import { defaultImage } from "../../../helpers/helpers";

function ActorsItem({ item }) {
  const switchGender = (gender) => {
    if (gender === 2) {
      return "Male";
    } else {
      return "Female";
    }
  };

  return (
    <NavListItem>
      <ActorCard>
        <ActorInfo>i</ActorInfo>
        <Drpo className="infoAcmenu">
          <div>
            Rating:
            <ReactStars
              count={item.popularity / 10}
              size={16}
              edit={false}
              activeColor="yellow"
              color="yellow"
            />
          </div>
          <div style={{ marginRight: "15px" }}>{switchGender(item.gender)}</div>
        </Drpo>
        <div className="img">
          <img
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w200/${item.profile_path}`
                : defaultImage
            }
            alt=""
          />
        </div>
        <ActorName>{item.name}</ActorName>
      </ActorCard>
    </NavListItem>
  );
}

export default ActorsItem;
