import React from "react";
import styles from "./DescriptionActivity.module.css";
import { useRecoilState } from "recoil";
import { ShowActivity } from "../../../recoil/desc-atoms";
import SubjectIcon from "@mui/icons-material/Subject";

function DescriptionActivity() {
  const [hideDetails, setHideDetails] = useRecoilState(ShowActivity);

  return (
    <div className={styles.activityContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.activityIcon}>
          <SubjectIcon />
        </div>
        <div className={styles.text}>
          <p>Activity</p>
        </div>
      </div>
      <div
        className={styles.details}
        onClick={() => setHideDetails(!hideDetails)}
      >
        {hideDetails ? <small>Hide</small> : <small>Show</small>}
      </div>
    </div>
  );
}

export default DescriptionActivity;
