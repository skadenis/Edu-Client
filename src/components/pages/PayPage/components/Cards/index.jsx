import React from "react";
import styles from "./styles.module.scss";
import Total from "../Total";
import Button from "../../../../form/Button";

const Cards = () => {
  return (
    <div>
      <Total withImg />
      <p className={styles.cards__descr}>Для оплаты счета банковской картой <span className={styles.fw600}>VISA/Mastercard</span> <br/>
        нажмите кнопку "Оплатить" и следуйте инструкциям платежной системы</p>

      <Button className={styles.cards__print} primary>Оплатить</Button>
    </div>
  )
}

export default Cards;