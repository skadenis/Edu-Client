import React, {useState} from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import ERIP from "../../../assets/erip.jpg"
import CardsImg from "../../../assets/cards.jpg"
import Page from "../../ui/Page";
import Erip from "./components/Erip";
import Cards from "./components/Cards";

const PayPage = () => {
  const [activeTab, setActiveTab] = useState("erip")
  return (
    <Page title="Оплата">
      <div className={styles.pay__actions}>
        <button
          className={classNames(styles.pay__btn, {[styles.active]: activeTab === "erip"})}
          onClick={() => setActiveTab("erip")}
        >
          <img className={styles.pay__btnImg} src={ERIP} alt="erip"/>
          <span className={styles.pay__btnText}>{activeTab === "erip" ? "Выбрано" : "Выбрать"}</span>
        </button>
        <button
          className={classNames(styles.pay__btn, {[styles.active]: activeTab === "cards"})}
          onClick={() => setActiveTab("cards")}
        >
          <img className={styles.pay__btnImg} src={CardsImg} alt="cards"/>
          <span className={styles.pay__btnText}>{activeTab === "cards" ? "Выбрано" : "Выбрать"}</span>
        </button>
      </div>

      {activeTab === "erip" ? (
        <Erip />
      ) : (
        <Cards />
      )}
    </Page>
  )
}

export default PayPage;