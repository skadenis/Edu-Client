import React, {useState} from "react";
import styles from "./styles.module.scss";
import {NavLink} from "react-router-dom";
import {ReactComponent as Logo} from "../../../assets/logo.svg";

const Header = ({user, setIsAuth}) => {
  const [activeList, setActiveList] = useState(false);


  const handleLogout = () => {
    console.log(user ?? "");
    localStorage.removeItem("AuthToken");
    setIsAuth(false);
  }

  return (
    <div className={styles.header}>
      <NavLink className={styles.header__logo} to="/schedule">
        <Logo className={styles.logo}/>
      </NavLink>
      {user &&
      <div onClick={() => console.log("Выйти")} className={styles.logout}>
        <button className={styles.logout__button} onClick={() => setActiveList(!activeList)}>{`${user.surname} ${user.name}`}</button>
        {activeList &&
        <div className={styles.logout__list}>
          <button className={styles.logout__listItem} onClick={handleLogout}>Выйти</button>
        </div>
        }
      </div>
      }
    </div>
  )
}

export default Header;