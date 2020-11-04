import React from "react";
import styles from "./styles.module.scss";

const Card = ({children, title}) => {
  return (
    <div className={styles.Card}>
      {title && <p className={styles.Card__title}>{title}</p>}
      {children}
    </div>
  )
}

export default Card;