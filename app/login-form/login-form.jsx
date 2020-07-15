import React from "react";
import styles from "./login-form.css";

export const LoginForm = () => (
  <div className={styles.overlay}>
    <div className={styles.container}>
      <input className={styles.block} placeholder="Логин" />
      <input className={styles.block} placeholder="Пароль" />
      <button className={`${styles.block} ${styles.button}`}> Войти </button>
    </div>
  </div>
);
