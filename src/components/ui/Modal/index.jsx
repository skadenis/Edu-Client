import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

const Modal = ({children, title, active, setActive}) => {

  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(active);
  }, [active]);

  return active && (
    <div className={classNames(styles.modal, {[styles.modal__show] : showing})}>
      <div className={styles.modal__wrapper}>
        {title && <p className={styles.modal__title}>{title}</p>}
        <div>{children}</div>
        <span onClick={() => setActive(false)} className={styles.modal__close}/>
      </div>
    </div>
  )
}

export default Modal;