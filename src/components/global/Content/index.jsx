import React from "react";
import styles from "./styles.module.scss";
import {Route, Switch} from "react-router-dom";
import HomePage from "../../pages/HomePage";

const Content = () => {
  return (
    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </div>
  )
}

export default Content;