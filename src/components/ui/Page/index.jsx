import React from "react";
import Card from "../Card";
import styles from "./styles.module.scss";
import {NavLink} from "react-router-dom";

const Page = ({children, title, primaryAction, breadCrumbs, subtitle}) => {
  return (
    <div className={styles.page}>
      <Card>
        {breadCrumbs &&
        <div className={styles.page__breadCrumbs}>
          <button onClick={breadCrumbs.handler} className={styles.breadCrumbsLink}>{breadCrumbs.text}</button>
        </div>
        }
        <div className={styles.page__head}>
          <p className={styles.page__title}>
            <span className={styles.page__titleText}>{title}</span>
            {subtitle && <span>{subtitle}</span>}
          </p>
          {primaryAction &&
          <NavLink to={primaryAction.url} className={styles.page__link}>{primaryAction.text}</NavLink>
          }
        </div>
        {children}
      </Card>
    </div>
  )
}

export default Page;