import React from "react";
import styles from "./styles.module.scss";

const Modal = ({children, title, active, setActive}) => {
  return active && (
    <div className={styles.modal}>
      <div className={styles.modal__wrapper}>
        {title && <p className={styles.modal__title}>{title}</p>}
        <div>{children}</div>
        <span onClick={() => setActive(false)} className={styles.modal__close}/>
      </div>
    </div>
  )
}

export default Modal;