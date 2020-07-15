import React from "react";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import styles from "./app-contents.css";
import { articles } from "./articles";

const NavBar = () => {
  let match = useRouteMatch();

  const history = useHistory();

  const onLogout = () => {
    history.push("/");
  };

  return (
    <div>
      <div className={styles.header}>
        <h2>метки</h2>
        <button className={styles.header__logout} onClick={onLogout}>
          Выйти
        </button>
      </div>
      <div className={styles.content}>
        <ul>
          {articles.map(({ name, path }) => (
            <li key={path}>
              <Link to={`${match.url}/${path}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const AppContent = () => {
  let match = useRouteMatch();

  return (
    <div className={styles.container}>
      <NavBar />
      <Switch>
        {articles.map(({ path, Component }) => (
          <Route path={`${match.url}/${path}`} key={path}>
            <Component />
          </Route>
        ))}
      </Switch>
    </div>
  );
};
