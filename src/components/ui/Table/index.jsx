import React from "react";
import style from "./style.module.scss";

const Table = ({children, title}) => {
  return (
    <div className={style.table}>
      {title && <p className={style.table__title}>{title}</p>}
      <div className={style.table__content}>
        {children}
      </div>
    </div>
  )
}

export default Table;