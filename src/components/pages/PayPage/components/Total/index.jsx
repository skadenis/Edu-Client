import React from "react";
import CardImg from "../../../../../assets/cardAdditional.jpg"
import styles from "./styles.module.scss";

const Total = ({withImg = false}) => {
  return (
    <>
      <div className={styles.total__head}>
        <span className={styles.total__orderNum}>Счет № 5269821</span>
        <span className={styles.total__date}>27.11.2020</span>
      </div>

      <div className={styles.total__wrap}>
        <div>
          <div className={styles.total__descr}>Облачный хостинг (id 13446), согласно публичному договору возмездного оказания услуг облачного хостинга</div>
          <div className={styles.total__total}>Сумма: 800.00 руб.</div>
        </div>
        {withImg && <img className={styles.total__img} src={CardImg} alt="card"/>}
      </div>
    </>
  )
}

export default Total;