import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss";
import videoIcon from "../../../assets/videoIcon.svg";
import Page from "../../ui/Page";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import {userApi} from "../../../api";
import moment from "moment";
import 'moment-timezone';

const SchedulePage = () => {

  const [loading, setLoading] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [groups, setGroups] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [homeworks, setHomeworks] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      setLoading(true);
      try {
        const data = await userApi.getGroupsList();
        setGroups(data);
      } catch (e) {
        console.log("Get groups list error: ", e);
      } finally {
        setLoading(false);
      }
    }
    const fetchLessons = async () => {
      setLoading(true);
      try {
        const data = await userApi.getUserLessons();
        setLessons(data);
      } catch (e) {
        console.log("Get lessons list error: ", e);
      } finally {
        setLoading(false);
      }
    }
    fetchGroups();
    fetchLessons();
  }, []);

  const handleShowHomeworkModal = (lessonHomeworks) => {
    setHomeworks(lessonHomeworks);
    setActiveModal(true);
  };

  const handleCloseModal = (active) => {
    setHomeworks([]);
    setActiveModal(active);
  }

  const tableScheduleHead =
    <p className={styles.scheduleRow}>
      <span className={styles.scheduleRow__item}>Номер</span>
      <span className={styles.scheduleRow__item}>Название урока</span>
      <span className={styles.scheduleRow__item}>Время</span>
      <span className={styles.scheduleRow__item}>Дата</span>
      <span/>
    </p>;

  const tableGroupsHead =
    <p className={styles.groupRow}>
      <span className={styles.groupRow__item}>Номер</span>
      <span className={styles.groupRow__item}>Название курса</span>
      <span className={styles.groupRow__item}>Направление</span>
      <span className={styles.groupRow__item}>Группа</span>
    </p>;

  return loading ? <div>Загрузка...</div> : (
    <>
      <Page title="Моё расписание:">
        {groups && !!groups.length &&
        <Table title="Мои группы:" headContent={tableGroupsHead}>
          {groups.map((group, index) => {
            return (
              <div className={styles.groupRow} key={group.id}>
                <span className={styles.groupRow__item}>{index + 1}.</span>
                <span className={styles.groupRow__item}>{group.program_name}</span>
                <span className={styles.groupRow__item}>{group.object_name}</span>
                <span className={styles.groupRow__item}>{group.group_name}</span>
              </div>
            )
          })}
        </Table>
        }

        {lessons && !!lessons.length &&
        <Table title="Расписание:" headContent={tableScheduleHead}>
          {lessons.map((lesson, index) => {
            return (
              <div className={styles.scheduleRow} key={lesson.id}>
                <span className={styles.scheduleRow__item}>{index + 1}.</span>
                <span className={styles.scheduleRow__item}>{lesson.name}</span>
                <span className={styles.scheduleRow__item}>{moment(lesson.date_time).tz('Europe/Minsk').format("HH:mm")}</span>
                <span className={styles.scheduleRow__item}>{moment(lesson.date_time).tz('Europe/Minsk').format("L")}</span>
                {!!lesson.homework.length ?
                  <button onClick={() => handleShowHomeworkModal(lesson.homework)} className={styles.scheduleRow__link}>Домашнее задание</button>
                  :
                  lesson.videolink ?
                  <a href={lesson.videolink} className={styles.scheduleRow__videolink}>
                    <img className={styles.scheduleRow__videoIcon} src={videoIcon} alt="video"/>
                    Подключиться
                  </a>
                  :
                  <span/>
                }
              </div>
            )
          })}
        </Table>
        }
      </Page>

      <Modal setActive={handleCloseModal} active={activeModal} title="Домашнее задание">
        {homeworks.map((homework, index) => {
          return (
            <p className={styles.homework} key={index}>{index + 1}. {homework}</p>
          )
        })}
      </Modal>

    </>
  )
}

export default SchedulePage;