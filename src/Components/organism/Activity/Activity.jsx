import React, { useEffect, useState } from "react";
import styles from "./Activity.module.css";
import {
  ShowActivity,
  atomListUid,
  list,
  uidOfListItem,
} from "../../../recoil/desc-atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { getData } from "../../../utils/data";
import PersonIcon from "@mui/icons-material/Person";

function Activity() {
  const detailsHide = useRecoilValue(ShowActivity);
  const [uidOfList, setUidOfList] = useRecoilState(uidOfListItem);
  const [currentListUid, setCurrentListUid] = useRecoilState(atomListUid);
  const [todoAction, setTodoAction] = useState("");
  const [tempData, setTempData] = useState(list);

  let listData = getData();
  const listIndex = listData.findIndex((ele) => ele.ListId === currentListUid);
  const cardIndex = listData[listIndex].tasks.findIndex(
    (ele) => ele.cardItemId === uidOfList
  );

  const [time, setTime] = useState(
    listData[listIndex].tasks[cardIndex].activity
  );
  let activityTime = [];
  localStorage.setItem("listData", JSON.stringify(listData));

  useEffect(() => {
    const listIndex = listData.findIndex(
      (item) => item.ListId === currentListUid
    );
    if (listIndex !== -1) {
      const nameOfList = listData[listIndex].nameOfList;
      setTodoAction(nameOfList);
      activityTime = listData[listIndex].tasks[cardIndex].activity;
    }

    setTime(activityTime);
    setTempData(listData);
  }, []);

  return (
    <div className={styles.main}>
      {detailsHide && (
        <div className={styles.timeContainer}>
          <div className={styles.activity}>
            {time.map((ele, index) => (
              <div className={styles.activityUserDetails} key={index}>
                <div className={styles.userDetails}>
                  <div className={styles.users}>
                    <PersonIcon />
                  </div>
                  <div className={styles.activityAlign}>
                    <span className={styles.User}>User</span>
                    <span className={styles.activityUserText}>{ele.text}</span>
                  </div>
                </div>

                <div>
                  <span className={styles.userTime}>{ele.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Activity;
