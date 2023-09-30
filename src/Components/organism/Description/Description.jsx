import React from "react";
import style from "./Description.module.css";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionTitle from "../DescriptionTitle/DescriptionTitle";
import DescriptionEdit from "../DescriptionEdit/DescriptionEdit";
import DescriptionActivity from "../DescriptionActivity/DescriptionActivity";
import Activity from "../Activity/Activity";

function Description() {
  const navigate = useNavigate();
  return (
    <div className={style.descriptionContainer}>
      <div className={style.descriptionMainContainer}>
        <div className={style.close}>
          <DescriptionTitle />
          <CloseIcon
            onClick={() => navigate("/")}
            className={style.iconClose}
          />
        </div>
        <DescriptionEdit />
        <DescriptionActivity />
        <Activity />
      </div>
    </div>
  );
}

export default Description;
