import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import styles from "./app-contents.css";


const navBarItems = [
  { name: "вращение", path: "rotation" },
  { name: "отведение", path: "abduction" },
  { name: "приведение", path: "cast" },
  { name: "пронация", path: "pronation" },
  { name: "разгибание", path: "extension" },
  { name: "сгибание", path: "bending" },
  { name: "супинация", path: "supination" }
];

export const AppContent = () => {
  let match = useRouteMatch();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>метки</h2>
      </div>
      <div className={styles.content}>
        <ul>
          {navBarItems.map(({ name, path }) => (
            <li key={path}>
              <a href={`#${path}`}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
