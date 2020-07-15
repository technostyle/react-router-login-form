import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./login-form.css";

export const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);

  const history = useHistory();

  const onLoginChange = event => setLogin(event.target.value);
  const onPasswordChange = event => setPassword(event.target.value);

  const onLogIn = () => {
    if (login !== "admin" || password !== "admin") {
      setAuthError(true);
      return;
    }

    history.push("content");
    setLogin("");
    setPassword("");
    setAuthError(false);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <input
          className={styles.block}
          placeholder="Логин"
          onChange={onLoginChange}
        />
        <input
          type="password"
          className={styles.block}
          placeholder="Пароль"
          onChange={onPasswordChange}
        />
        {authError ? (
          <div className={styles.block_error}> Попробуйте admin admin </div>
        ) : null}
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
