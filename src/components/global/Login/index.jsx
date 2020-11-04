import React, {useState} from "react";
import {Formik} from "formik";
import Input from "../../form/Input";
import Button from "../../form/Button";
import Card from "../../ui/Card";
import styles from "./styles.module.scss";
import classNames from "classnames";
import {ReactComponent as Logo} from "../../../assets/logo.svg";

const Login = ({active, setIsAuth}) => {

  const [loading, setLoading] = useState(false);

  const login = (values) => {
    setLoading(false);
    console.log(values)
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
                <Input name="login" placeholder="Введите логин" autocmoplete="off"/>
                <Input name="password" placeholder="Введите пароль" type="password" autocmoplete="off"/>
                <Button onClick={() => setIsAuth(true)} loading={loading} fullWidth>Войти</Button>
              </div>
            )}
            </Formik>
          </Card>
          <Logo className={styles.login__logo}/>
        </div>
      </div>
    </div>
  )
}

export default Login