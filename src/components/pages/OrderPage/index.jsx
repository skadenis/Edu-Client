import React, {useContext, useEffect, useState} from "react";
import styles from "./styles.module.scss";
import Page from "../../ui/Page";
import money from "../../../assets/money.png"
import Table from "../../ui/Table";
import moment from "moment";
import cashbox from "../../../assets/cashbox.svg"
import {userApi} from "../../../api";
import UserContext from "../../../contexts";
import {NavLink} from "react-router-dom";

const OrderPage = () => {

  const [loading, setLoading] = useState(false);
  const [bills, setBills] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    const fetchBills = async () => {
      setLoading(true);
      try {
        const data = await userApi.getUserBills();
        setBills(data);
      } catch (e) {
        console.log("Get bills error: ", e);
      } finally {
        setLoading(false);
      }
    }
    fetchBills()
  }, []);

  const tableHead =
    <p className={styles.payTableRow}>
      <span className={styles.payTableRow__item}>Дата счёта</span>
      <span className={styles.payTableRow__item}>Номер</span>
      <span className={styles.payTableRow__item}>Описание</span>
      <span className={styles.payTableRow__item}>Сумма</span>
      <span className={styles.payTableRow__item}/>
    </p>;

  return (
    <Page title="Оплата">
      <div className={styles.payHead}>
        {user && <p className={styles.payHead__text}>Баланс счета: <img src={money} alt="cash" className={styles.payHead__img}/> <span className={styles.payHead__bold}>{Number(user.wallet).toFixed(2)}</span> BYN</p>}
      </div>

      {loading ? <div>Загрузка... </div> : (bills && !!bills.length) ?
        <Table title="Список счетов" headContent={tableHead}>
          {bills.map(bill => {
            return (
              <p className={styles.payTableRow} key={bill.id}>
                <span className={styles.payTableRow__item}>{moment(bill.date).format("L")}</span>
                <span className={styles.payTableRow__item}>{bill.id}</span>
                <span className={styles.payTableRow__item}>{bill.description}</span>
                <span className={styles.payTableRow__item}>{Number(bill.amount).toFixed(2)}</span>
                <NavLink className={styles.payTableRow__link} to={`/orders/${bill.id}`}>
                  <img className={styles.payTableRow__icon} src={cashbox} alt="cashbox"/>
                  Оплатить
                </NavLink>
              </p>
            )
          })}
        </Table>
        :
        <p className={styles.pay__empty}>У вас нет неоплаченных счетов</p>
      }
    </Page>
  )
}

export default OrderPage;