import React, {useState} from "react";
import {Formik} from "formik";
import Input from "../../form/Input";
import Button from "../../form/Button";
import Card from "../../ui/Card";
import styles from "./styles.module.scss";
import classNames from "classnames";
import {ReactComponent as Logo} from "../../../assets/logo.svg";
import {authApi} from "../../../api";
import {useHistory} from "react-router-dom";

const Login = ({active, setIsAuth}) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const login = async (values) => {
    setLoading(true);
    authApi.login(values)
      .then(() => {
        setIsAuth(true);
        history.push("/");
      })
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  }

  return (
    <div className={classNames(styles.login, {[styles.active] : active})}>
      <div className={styles.login__wrapper}>
        <div className={styles.login__box}>
          <Card>
            <div className={styles.login__title}>Вход</div>
            <Formik
              initialValues={{
                login: "",
                password: ""
              }}
              onSubmit={login}
            >{({submitForm}) => (
              <div>
                <Input name="login" type="number" autocmoplete="off" label="Номер студенческого билета:"/>
                <Input name="password" type="password" autocmoplete="off" label="Пароль:"/>
                {error && <p className={styles.login__error}>{error}</p>}
                <Button onClick={submitForm} loading={loading} fullWidth>Войти</Button>
              </div>
            )}
            </Formik>
          </Card>
          <Logo className={styles.login__logo}/>
          <a className={styles.login__phone} href="tel:+3752911111111">Нужна помощь? <br/> Звони - +375291111111</a>
        </div>
      </div>
    </div>
  )
}

export default Login