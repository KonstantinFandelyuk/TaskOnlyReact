import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
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
  const SignupSchema = Yup.object().shape({
    login: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .test('login', 'Введите корректный логин', checkLogin)
      .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .test('login', 'Введите корректный пароль', checkPassword)
      .required('Required'),
  });

  function checkLogin(values) {
    if (values === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  function checkPassword(values) {
    if (values === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  const checkUser = (e, errors, values) => {
    e.preventDefault();
    if (
      Object.keys(errors).length === 0 &&
      values.login === 'admin' &&
      values.password === 'admin'
    ) {
      setToken('d066da765285ecde606037392054558a');
      sessionStorage.setItem('userID', 'd066da765285ecde606037392054558a');
    }
  };

  return (
    <div className="wrapper">
      <LoginUser>
        <ModalBG>
          <Title>Авторизируйтесь</Title>
          <Formik
            initialValues={{ login: '', password: '' }}
            onSubmit={checkUser}
            validationSchema={SignupSchema}
          >
            {({ values, errors, touched, submitForm, isSubmitting, handleChange }) => (
              <Form>
                <ul>
                  <LiItem>
                    <Label for="login">{errors.login && <span>{errors.login}</span>}</Label>
                    <Input
                      name="login"
                      type="login"
                      onChange={handleChange}
                      value={values.login}
                      placeholder="Ваш Login"
                    />
                  </LiItem>
                  <LiItem>
                    <Label for="password">
                      {errors.password && <span>{errors.password}</span>}
                    </Label>
                    <Input
                      name="password"
                      type="password"
                      onChange={handleChange}
                      value={values.password}
                      placeholder="Ваш Password"
                    />
                  </LiItem>
                </ul>
                <Button type="submit" onClick={(e) => checkUser(e, errors, values)}>
                  Нажми меня
                </Button>
              </Form>
            )}
          </Formik>

          <TextInfo>
            Подсказка пароля <SpanBold>Login:</SpanBold> admin <SpanBold>Password:</SpanBold> admin
          </TextInfo>
        </ModalBG>
      </LoginUser>
    </div>
  );
};

export default Login;
