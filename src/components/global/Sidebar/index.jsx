import React from "react";
import styles from "./styles.module.scss";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <NavLink className={styles.link} activeClassName={styles.link__active} to="/schedule">Моё расписание</NavLink>
      <NavLink className={styles.link} activeClassName={styles.link__active} to="/orders">Оплата</NavLink>
      <NavLink className={styles.link} activeClassName={styles.link__active} to="/help">Помощь</NavLink>
    </div>
  )
}

export default Sidebar;