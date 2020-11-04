import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames"

const FormLayout = ({children, title, withDivider}) => {
  return (
    <div className={classNames(styles.form, {[styles.dividered]: withDivider})}>
      <div className={styles.form__title}>{title}</div>
      <div>{children}</div>
    </div>
  )
}

export default FormLayout;