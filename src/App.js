import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss";
import {BrowserRouter, withRouter, useHistory} from "react-router-dom";
import Login from "./components/global/Login";
import Header from "./components/global/Header";
import Sidebar from "./components/global/Sidebar";
import Content from "./components/global/Content";
import {authApi} from "./api";
import UserContext from "./contexts";

const App = (props) => {

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (props.location.pathname === "/") {
      history.push("/schedule");
    }
    setLoading(true);
    authApi.me()
      .then((res) => {
        if (res.status === 200) {
          setIsAuth(true);
          setUser(res.data);
        } else setIsAuth(false);
        setLoading(false);
      })
      .catch(e => {
        console.log("Auth error: ", e);
        setIsAuth(false);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location.pathname]);

  return (
    <>
      {loading ? <div>Загрузка...</div>
        : <div className={styles.app}>
          <div className={styles.app__wrap}>
            <Login setIsAuth={setIsAuth} active={!isAuth}/>
            <div className={styles.app__wrapper}>
              <Header user={user} setIsAuth={setIsAuth}/>
              <div className={styles.app__container}>
                <Sidebar/>
                <UserContext.Provider value={user}>
                  <Content/>
                </UserContext.Provider>
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
