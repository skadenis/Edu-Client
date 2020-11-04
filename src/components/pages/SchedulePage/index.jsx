import React, {useState} from "react";
import styles from "./styles.module.scss";
import Page from "../../ui/Page";
import Table from "../../ui/Table";
import Button from "../../form/Button";
import Modal from "../../ui/Modal";

const SchedulePage = () => {

  const [activeModal, setActiveModal] = useState(false);
  const [activeModalSecond, setActiveModalSecond] = useState(false);

  return (
    <>
      <Page title="Моё расписание:">
        <Table title="Мои группы:">
          <div className={styles.groupItem}>
            <span>1.</span>
            <span>Английский язык</span>
            <span>Подготовка к цт</span>
            <span>А-22</span>
          </div>
          <div className={styles.groupItem}>
            <span>2.</span>
            <span>Испанский язык</span>
            <span>Пробное занятие</span>
            <span>К-30</span>
          </div>
        </Table>

        <Table title="Расписание:">
          <div className={styles.scheduleItem}>
            <span>1.</span>
            <span>Психология</span>
            <span>14:00</span>
            <span>22.11.20</span>
            <button onClick={() => setActiveModal(true)} className={styles.scheduleItem__link}>Домашнее задание</button>
          </div>
          <div className={styles.scheduleItem}>
            <span>2.</span>
            <span>HTML</span>
            <span>08:00</span>
            <span>22.11.20</span>
            <button onClick={() => setActiveModalSecond(true)} className={styles.scheduleItem__link}>Домашнее задание</button>
          </div>
          <div className={styles.scheduleItem}>
            <span>3.</span>
            <span>Английский язык</span>
            <span>10:00</span>
            <span>22.11.20</span>
            <Button primary>Подключиться</Button>
          </div>
          <div className={styles.scheduleItem}>
            <span>4.</span>
            <span>Испанский язык</span>
            <span>11:00</span>
            <span>22.11.20</span>
            <Button disabled={true}>Подключиться</Button>
          </div>
          <div className={styles.scheduleItem}>
            <span>5.</span>
            <span>JavaScript</span>
            <span>14:00</span>
            <span>22.11.20</span>
            <Button disabled={true}>Подключиться</Button>
          </div>
        </Table>
      </Page>
      <Modal setActive={setActiveModal} active={activeModal} title="Домашнее задание">
        <p className={styles.homework}>1. Типы темперамента</p>
        <p className={styles.homework}>2. Типы характера</p>
        <p className={styles.homework}>3. Задание №39</p>
      </Modal>
      <Modal setActive={setActiveModalSecond} active={activeModalSecond} title="Домашнее задание">
        <p className={styles.homework}>1. Виды разметки</p>
        <p className={styles.homework}>2. Гиперссылки</p>
        <p className={styles.homework}>3. Виды списков</p>
        <p className={styles.homework}>4. Задание №3</p>
      </Modal>
    </>
  )
}

export default SchedulePage;