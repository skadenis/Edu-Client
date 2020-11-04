import React from "react";
import styles from "./styles.module.scss";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <NavLink className={styles.link} activeClassName={styles.link__active} to="/courses">Все курсы</NavLink>
      <NavLink className={styles.link} activeClassName={styles.link__active} to="/students">Студенты</NavLink>
      <NavLink className={styles.link} activeClassName={styles.link__active} to="/teachers">Преподаватели</NavLink>
      <NavLink className={styles.link} activeClassName={styles.link__active} to="/users">Пользователи</NavLink>
      <NavLink className={styles.link} activeClassName={styles.link__active} to="/reports">Отчеты</NavLink>
    </div>
  )
}

export default Sidebar;