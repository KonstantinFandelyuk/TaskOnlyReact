import React from "react";
import { observer } from "mobx-react-lite";
import UserApi from "../../../store/UserAPI";
import { Button, Input, Title, LiItem, Label } from "./style";

export const LogIn = observer(() => {
  return (
    <div className="login">
      <Title>Вход в учетную запись</Title>
      <form className="form">
        <Input
          type="text"
          name="username"
          onChange={(e) => UserApi.getUserName(e.target.value)}
          placeholder="Login"
        />
        <Input
          type="password"
          name="password"
          onChange={(e) => UserApi.getUserPassword(e.target.value)}
          placeholder="Password"
        />
        <Button type="button" onClick={() => UserApi.logging()}>
          Ок
        </Button>
      </form>
    </div>
  );
});
