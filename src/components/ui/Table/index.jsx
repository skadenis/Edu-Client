import React from "react";
import style from "./style.module.scss";

const Table = ({children, title, headContent}) => {
  return (
    <>
    {title && <p className={style.table__title}>{title}</p>}
    <div className={style.table__wrapper}>
      {headContent && <div className={style.table__head}>{headContent}</div>}
      <div className={style.table__content}>
        {children}
      </div>
    </div>
    </>
  )
}

export default Table;