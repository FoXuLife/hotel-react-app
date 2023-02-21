import React from "react";
import c from "./Login.module.scss";
import { useForm } from "react-hook-form";
const Login = () => {
  const { register, handleSubmit } = useForm({});
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={c.loginPage}>
      <form className={c.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <h1>Simple Hotel Check</h1>
        <div className={c.loginField}>
          <label>Логин</label>
          <input type="text" {...register('login')} />
        </div>
        <div className={c.loginField}>
          <label>Пароль</label>
          <input type="password" {...register('password')} />
        </div>
        <button>Войти</button>
      </form>
    </div>
  );
};

export default Login;
