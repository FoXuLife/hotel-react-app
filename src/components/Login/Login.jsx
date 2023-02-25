import React from "react";
import c from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/reducers/authReducer";
import { Navigate, useNavigate } from "react-router";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const isAuth = useSelector((store) => store?.authReducer.isAuth);
  const serverErrors = useSelector((store) => store?.authReducer.errors);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = ({ login, password }) => {
    dispatch(loginRequest(login, password, navigate));
  };
  return isAuth ? (
    <Navigate to="/" />
  ) : (
    <div className={c.loginPage}>
      <form className={c.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <h1>Simple Hotel Check</h1>
        <div
          className={`${c.loginField} ${
            (errors.login || serverErrors) && c.errors
          }`}
        >
          <label>Логин</label>
          <input
            type="text"
            {...register("login", {
              required: "Поле логина обязательно для заполнения",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Введите логин в формате NN@NN.com",
              },
            })}
          />
          {(errors.login && <p>{errors.login.message} </p>) ||
            (serverErrors && <p>{serverErrors} </p>)}
        </div>
        <div
          className={`${c.loginField} ${
            (errors.password || serverErrors) && c.errors
          }`}
        >
          <label>Пароль</label>
          <input
            type="password"
            {...register("password", {
              required: "Поле пароля обязательно для заполнения",
              minLength: {
                value: 8,
                message: "Минимум 8 символов",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{0,}$/,
                message: "Недопустимые символы",
              },
            })}
          />
          {(errors.password && <p>{errors.password.message} </p>) ||
            (serverErrors && <p>{serverErrors} </p>)}
        </div>
        <button>Войти</button>
      </form>
    </div>
  );
};

export default Login;
