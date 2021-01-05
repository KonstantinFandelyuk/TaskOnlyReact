import React, { useState } from "react";
import { LogIn } from "./LogIn/index";
// import UserApi from "../../store/UserAPI";
import { SignUp } from "./SignUp";
import { LoginUser, ModalBG, TextInfo, ButtonList, Button } from "./style";

export const UserAccess = () => {
  const [userAuth, setUserAuth] = useState(true);
  return (
    <div className="wrapper">
      <LoginUser>
        <ModalBG>
          {userAuth ? <SignUp /> : <LogIn />}
          <ButtonList>
            <Button
              type="button"
              onClick={() => {
                setUserAuth(true);
              }}
            >
              Зарегистрироваться
            </Button>
            <TextInfo>или</TextInfo>
            <Button
              type="button"
              onClick={() => {
                setUserAuth(false);
              }}
            >
              Войти
            </Button>
          </ButtonList>
        </ModalBG>
      </LoginUser>
    </div>
  );
};
