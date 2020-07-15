import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./login-form.css";

export const LoginForm = () => {
  const history = useHistory();

  const onLogIn = () => {
    history.push("content");
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <input className={styles.block} placeholder="Логин" />
        <input type='password' className={styles.block} placeholder="Пароль" />
        <button
          className={`${styles.block} ${styles.button}`}
          onClick={onLogIn}
        >
          Войти
        </button>
      </div>
    </div>
  );
};
