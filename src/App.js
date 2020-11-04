import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss";
import {BrowserRouter, withRouter, useHistory} from "react-router-dom";
import Login from "./components/global/Login";
import Header from "./components/global/Header";
import Sidebar from "./components/global/Sidebar";
import Content from "./components/global/Content";

const App = (props) => {

  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (props.location.pathname === "/") {
      history.push("/schedule");
    }
    setLoading(false);
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   setIsAuth(false);
    // }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location.pathname])

  return (
    <>
      {loading ? <div>Загрузка...</div>
        : <div className={styles.app}>
          <div className={styles.app__wrap}>
            <Login setIsAuth={setIsAuth} active={!isAuth}/>
            <div className={styles.app__wrapper}>
              <Header/>
              <div className={styles.app__container}>
                <Sidebar/>
                <Content/>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export const AppWithRouter = withRouter(App);

const RouterApp = () => {
  return (
    <BrowserRouter>
      <AppWithRouter />
    </BrowserRouter>
  )
}

export default RouterApp;
