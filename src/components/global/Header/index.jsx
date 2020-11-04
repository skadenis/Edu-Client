import React from "react";
import styles from "./styles.module.scss";
import {NavLink} from "react-router-dom";
import {ReactComponent as Logo} from "../../../assets/logo.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink className={styles.header__logo} to="/schedule">
        <Logo className={styles.logo}/>
      </NavLink>
      <button onClick={() => console.log("Выйти")} className={styles.header__logout}>Выйти</button>
    </div>
  )
}

export default Header;