import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import UserAPI from "../../../store/UserAPI";
import {
  GrafBig,
  GrafTittle,
  ButtonList,
  Button,
  RatingList,
  RatingItem,
  RatingTitle,
} from "./style";

export const CenterGraf = observer(() => {
  const [userRating, setUserRating] = useState("top");
  return (
    <GrafBig>
      <GrafTittle>Top Category</GrafTittle>
      <RatingList>
        <RatingTitle>
          <div className="name">User name</div>
          <div className="like">Number of likes</div>
        </RatingTitle>
        {UserAPI.userAllList
          .filter(({ userRating: rating }) => rating === userRating)
          .map(({ username, userSurname, userLikes, objectId }) => (
            <RatingItem key={objectId}>
              <div className="list" style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  {username} {userSurname}
                </span>
                <span>{userLikes}</span>
              </div>
            </RatingItem>
          ))}
      </RatingList>
      <ButtonList>
        <Button
          onClick={() => setUserRating("top")}
          className={userRating === "top" ? "active" : null}
        >
          Top
        </Button>
        <Button
          onClick={() => setUserRating("middle")}
          className={userRating === "middle" ? "active" : null}
        >
          Middle
        </Button>
        <Button
          onClick={() => setUserRating("start")}
          className={userRating === "start" ? "active" : null}
        >
          Low
        </Button>
      </ButtonList>
    </GrafBig>
  );
});
