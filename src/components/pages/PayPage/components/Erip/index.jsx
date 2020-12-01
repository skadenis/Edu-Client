import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Button from "../../../../form/Button";
import Total from "../Total";

const Erip = () => {
  return (
    <div>
      <Total />
      <div className={styles.erip__variantDescr}>Выберите подходящий вам способ оплаты через банкоматы, инфокиоски или интернет-банкинг с помощью системы "Расчет" (ЕРИП):</div>

      <div className={styles.erip__variants}>
        <div>
          <p className={styles.erip__variantTitle}>У меня есть код услуги:</p>
          <div>
            <p className={styles.erip__text}>Перейдите в раздел "<span className={styles.fw600}>Oплата в ЕРИП по коду услуги</span>"</p>
            <p className={styles.erip__text}>Введите код услуги <span className={styles.fw600}>393621</span></p>
            <p className={styles.erip__text}>Проверьте выбранную компанию <span className={styles.fw600}>Надежные программы hoster.by</span></p>
            <p className={styles.erip__text}>Введите номер счета <span className={styles.fw600}>5269821</span></p>
            <p className={styles.erip__text}>После проверки услуги и суммы оплаты проведите платеж.</p>
          </div>
        </div>
        <div>
          <p className={styles.erip__variantTitle}>Я выберу услугу в дереве ЕРИП:</p>
          <div>
            <p className={styles.erip__text}>Перейдите в раздел <span className={styles.fw600}>"Интернет, Телевидение, Телефония" -> "Хостинги и домены".</span></p>
            <p className={styles.erip__text}>Выберите компанию <span className={styles.fw600}>Надежные программы hoster.by</span></p>
            <p className={styles.erip__text}>Выберите <span className={styles.fw600}>"Информационное обслуживание"</span></p>
            <p className={styles.erip__text}>Введите номер счета <span className={styles.fw600}>5269821</span></p>
            <p className={styles.erip__text}>После проверки услуги и суммы оплаты проведите платеж.</p>
          </div>
        </div>
      </div>

      <div className={styles.erip__variantDescr}>Реквизиты получателя платежа:</div>
      <div className={styles.erip__info}>
        <p className={classNames(styles.erip__text, styles.fw600)}>ООО "Надежные программы"</p>
        <p className={styles.erip__text}>УНП 100160363</p>
        <p className={styles.erip__text}>220006, г. Минск, ул. Аранская, 8, блок 1, 4 этаж</p>
        <p className={styles.erip__text}>р/с (IBAN) BY95PJCB30120208631000000933</p>
        <p className={styles.erip__text}>ЦБУ №113 в "Приорбанк" ОАО, BIC PJCBBY2X</p>
        <p className={styles.erip__text}>220030, г. Минск, ул. Комсомольская, 13</p>
        <p className={styles.erip__text}>тел. +375 17 239-57-02</p>
      </div>

      <Button className={styles.erip__print} primary>Распечатать</Button>
    </div>
  )
}

export default Erip;