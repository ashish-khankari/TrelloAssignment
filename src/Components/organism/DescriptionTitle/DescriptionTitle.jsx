import { useState, useEffect } from "react";
import style from "./DescriptionTitle.module.css";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import { useRecoilState } from "recoil";
import TextField from "@mui/material/TextField";
import {
  atomCardName,
  list,
  uidOfListItem,
  atomListUid,
} from "../../../recoil/desc-atoms";
import { getData } from "../../../utils/data";

function DescriptionTitle() {
  const [titleEdit, setTitleEdit] = useState(false);
  const [titleText, setTitleText] = useRecoilState(atomCardName);
  const [listData, setListData] = useRecoilState(list);
  const [uidOfList, setUidOfList] = useRecoilState(uidOfListItem);
  const [currentListUid, setCurrentListUid] = useRecoilState(atomListUid);
  const [listTitle, setListTitle] = useState("");

  useEffect(() => {
    let listData = getData();
    const listIndex = listData.findIndex(
      (item) => item.ListId === currentListUid
    );
    if (listIndex !== -1) {
      const nameOfList = listData[listIndex].nameOfList;
      setListTitle(nameOfList);
    }
  }, []);

  function handleTextField(e) {
    setTitleText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTitleEdit(!titleEdit);

    const tempList = getData();
    const listIndex = tempList.findIndex(
      (ele) => ele.ListId === currentListUid
    );
    const cardIndex = tempList[listIndex].tasks.findIndex(
      (ele) => ele.cardItemId === uidOfList
    );
    tempList[listIndex].tasks[cardIndex].nameOfCardItem = titleText;
    localStorage.setItem("listData", JSON.stringify(tempList));
    setListData(tempList);
  }

  return (
    <>
      <div className={style.titleContainer}>
        <div className={style.titleFirst}>
          <div className={style.titleIcon}>
            <DvrOutlinedIcon
              className={style.icon}
              style={{ fontSize: "20px" }}
            />
          </div>

          <div className={style.titleSecond}>
            <div className={style.titleName}>
              <form onSubmit={handleSubmit}>
                {titleEdit ? (
                  <>
                    <TextField
                      id="outlined-size-small"
                      value={titleText}
                      size="small"
                      onChange={handleTextField}
                      className={style.textField}
                    />
                  </>
                ) : (
                  <p onClick={() => setTitleEdit(!titleEdit)}>{titleText}</p>
                )}
              </form>
              <div className={style.listName}>
                <small>
                  in list{" "}
                  <span className={style.listTitleName}>{listTitle} </span>{" "}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DescriptionTitle;
