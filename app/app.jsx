import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import styles from "./app.css";
import { AppContent } from "./app-content";
import { LoginForm } from "./login-form";

export const App = () => {
  console.log(useRouteMatch());
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div> hello world</div>
        </Route>
        <Route path="/content">
          <AppContent />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
      </Switch>
    </Router>
  );
};
