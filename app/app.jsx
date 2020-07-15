import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./app.css";
import { AppContent } from "./app-content";
import { LoginForm } from "./login-form";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/content">
          <AppContent />
        </Route>
        <Route exact path="/">
          <LoginForm />
        </Route>
      </Switch>
    </Router>
  );
};
