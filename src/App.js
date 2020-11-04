import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss";
import {BrowserRouter} from "react-router-dom";
import Login from "./components/global/Login";
import Header from "./components/global/Header";
import Sidebar from "./components/global/Sidebar";
import Content from "./components/global/Content";

const App = () => {

  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsAuth(false);
    }, 500);
  }, [])

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
