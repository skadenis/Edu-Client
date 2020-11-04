import React from "react";
import styles from "./styles.module.scss";
import {ReactComponent as Spinner} from "../../../assets/spinner.svg";
import classNames from "classnames";

const Button = ({children, onClick, disabled, loading, primary, warning, save, className}) => {
  return (
    <button
      className={classNames(styles.button, {[styles.primary]: primary}, {[styles.warning]: warning}, {[styles.save]: save}, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <Spinner className={styles.spinner}/> : children}
    </button>
  )
}

export default Button;