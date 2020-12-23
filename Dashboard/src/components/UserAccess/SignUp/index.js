import React from "react";
import { observer } from "mobx-react-lite";
import UserApi from "../../../store/UserAPI";
import { Button, Input, Title, LiItem, Label } from "./style";

export const SignUp = observer(() => {
  const res = false;
  return (
    <div className="signUp">
      <Title>Регистрация нового пользователя</Title>
      {!UserApi.userRegistration ? (
        <form className="form">
          <Input
            type="text"
            name="username"
            onChange={(e) => UserApi.getUserName(e.target.value)}
            placeholder="Ваше имя"
          />
          <Input
            type="password"
            name="password"
            onChange={(e) => UserApi.getUserPassword(e.target.value)}
            placeholder="Ваш пароль"
          />
          <Button type="button" onClick={() => UserApi.registrationUser()}>
            Ок
          </Button>
        </form>
      ) : (
        <div>Вы успешно зарегестрировались. Теперь вы можете зайти под своим логином и паролем</div>
      )}
    </div>
  );
});
