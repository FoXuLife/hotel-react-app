import React from "react";
import c from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/reducers/authReducer";
import { Navigate, useNavigate } from "react-router";
const Login = () => {
  const { register, handleSubmit } = useForm({});
  const isAuth = useSelector((store) => store?.authReducer.isAuth);
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
        <div className={c.loginField}>
          <label>Логин</label>
          <input type="text" {...register("login")} />
        </div>
        <div className={c.loginField}>
          <label>Пароль</label>
          <input type="password" {...register("password")} />
        </div>
        <button>Войти</button>
      </form>
    </div>
  );
};

export default Login;
