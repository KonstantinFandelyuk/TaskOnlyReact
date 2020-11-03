import React, { useState, useContext } from 'react';
import { Context } from '../../context/Context';
import {
  LoginUser,
  ModalBG,
  Button,
  Input,
  TextInfo,
  Title,
  LiItem,
  Label,
  SpanBold,
} from './style';

const Login = () => {
  const { setToken } = useContext(Context);
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [check, setCheck] = useState(true);

  const checkUser = (e) => {
    e.preventDefault();
    if (userName === 'admin' && userPassword === 'admin') {
      setToken('d066da765285ecde606037392054558a');
      sessionStorage.setItem('userID', 'd066da765285ecde606037392054558a');
    } else {
      setCheck(false);
    }
  };

  return (
    <div className="wrapper">
      <LoginUser>
        <ModalBG>
          <Title>Авторизируйтесь</Title>
          <form name="my">
            <ul>
              <LiItem>
                <Label for="login">{check ? null : 'Ошибка'}</Label>
                <Input
                  type="text"
                  id="login"
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Ваш Login"
                />
              </LiItem>
              <LiItem>
                <Label for="password">{check ? null : 'Ошибка'}</Label>
                <Input
                  type="password"
                  id="password"
                  onChange={(e) => setUserPassword(e.target.value)}
                  placeholder="Ваш Password"
                />
              </LiItem>
            </ul>
            <Button onClick={(e) => checkUser(e)}>Нажми меня</Button>
          </form>
          <TextInfo>
            Подсказка пароля <SpanBold>Login:</SpanBold> admin <SpanBold>Password:</SpanBold> admin
          </TextInfo>
        </ModalBG>
      </LoginUser>
    </div>
  );
};

export default Login;
