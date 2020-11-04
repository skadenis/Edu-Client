import React from "react";
import styles from "./styles.module.scss";
import {Route, Switch} from "react-router-dom";
import SchedulePage from "../../pages/SchedulePage";
import HelpPage from "../../pages/HelpPage";
import PayPage from "../../pages/PayPage";

const Content = () => {
  return (
    <div className={styles.content}>
      <Switch>
        <Route exact path="/schedule" component={SchedulePage}/>
        <Route exact path="/pay" component={PayPage}/>
        <Route exact path="/help" component={HelpPage}/>
      </Switch>
    </div>
  )
}

export default Content;