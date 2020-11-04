import React from "react";
import Modal from "../Modal";
import styles from "./styles.module.scss";
import Button from "../../form/Button";

const ConfirmModal = ({active, title, message, setActive, approve, loading}) => {
  return (
    <Modal
      active={active}
      title={title}
      setActive={setActive}
    >
      <div className={styles.confirmModal__message}>{message}</div>

      <div className={styles.confirmModal__actions}>
        <Button onClick={() => setActive(false)} loading={loading}>Отмена</Button>
        <Button primary onClick={approve} loading={loading}>Подтвердить</Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;