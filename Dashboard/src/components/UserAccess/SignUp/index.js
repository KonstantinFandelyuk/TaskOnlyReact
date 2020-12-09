import React from "react";
import { observer } from "mobx-react-lite";
import UserApi from "../../../store/UserAPI";
import { Button, Input, Title, LiItem, Label } from "./style";

export const SignUp = observer(() => {
  return (
    <div className="signUp">
      <Title>Регистрация нового пользователя</Title>
      <form className="form">
        <Input type="text" name="username" onChange={(e) => UserApi.getUserName(e.target.value)} />
        <Input
          type="password"
          name="password"
          onChange={(e) => UserApi.getUserPassword(e.target.value)}
        />
        <Button type="button" onClick={() => UserApi.registrationUser()}>
          Ок
        </Button>
      </form>
    </div>
  );
});
