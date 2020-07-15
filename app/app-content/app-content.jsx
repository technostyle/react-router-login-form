import React from "react";
import styles from "./app-contents.css";

console.log({ styles });

export const AppContent = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h2>метки</h2>
    </div>
    <div className={styles.content}>
      <ul>
        <li>
          <a href="#0">вращение</a>
        </li>
        <li>
          <a href="#1">отведение</a>
        </li>
        <li>
          <a href="#2">приведение</a>
        </li>
        <li>
          <a href="#3">пронация</a>
        </li>
        <li>
          <a href="#4">разгибание</a>
        </li>
        <li>
          <a href="#4">сгибание</a>
        </li>
        <li>
          <a href="#5">супинация</a>
        </li>
      </ul>
    </div>
  </div>
);
