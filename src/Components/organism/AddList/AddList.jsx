import React, { useState } from "react";
import styles from "./AddList.module.css";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuid } from "uuid";
import Alert from "@mui/material/Alert";
import AddTodo from "../AddTodo/AddTodo";
import { list } from "../../../recoil/desc-atoms";
import { useRecoilState } from "recoil";
import { getData } from "../../../utils/data";
import { Droppable } from "react-beautiful-dnd";
import Swal from "sweetalert2";

export default function AddList() {
  const [isVisible, setIsVisible] = useState(true);
  let data = getData();
  const [listName, setListName] = useState("");
  const [listData, setListData] = useRecoilState(list);

  function handleAddList() {
    setIsVisible(false);
  }

  const handleAddCardItem = () => {
    if (listName != "") {
      const tempList = {
        ListId: uuid(),
        nameOfList: listName,
        tasks: [],
      };
      setListName("");
      setListData([...listData, tempList]);
      setIsVisible(!isVisible);
    }
  };

  function handleDelete(listId) {
    <Alert variant="filled" severity="error">
      This is an error alert — check it out!
    </Alert>;
    const updatedList = listData.filter((ele) => ele.ListId != listId);
    setListData(updatedList);
    localStorage.setItem("listData", JSON.stringify(updatedList));
  }

  return (
    <div style={{ display: "flex", margin: "20px" }}>
      <div style={{ display: "flex", marginLeft: "20px" }}>
        <Droppable droppableId="board" type="COLUMN" direction="horizontal">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                display: "flex",
              }}
            >
              {listData.map((list, index) => (
                <div key={list.ListId}>
                  <AddTodo
                    index={index}
                    listName={list.nameOfList}
                    listId={list.ListId}
                    handleDelete={() => handleDelete(list.ListId)}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      <div
        style={{ marginLeft: "20px" }}
        className={`${styles.container} ${isVisible ? "" : styles.expanded}`}
      >
        {isVisible ? (
          <div className={styles.btnWrapper} onClick={handleAddList}>
            <AddIcon /> <span> Add another list</span>
          </div>
        ) : (
          <div className={styles.inputWrapper}>
            <input
              type="text"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              className={styles.inputField}
              placeholder="Enter list title..."
            />
            <div className={styles.innerDiv}>
              {listName.length != 0 ? (
                <Button onClick={handleAddCardItem} variant="contained">
                  Add List
                </Button>
              ) : (
                <Button
                  color="primary"
                  onClick={() => Swal.fire("Please enter title name")}
                  variant="contained"
                >
                  Enter Title
                </Button>
              )}

              <Button
                color="error"
                id={styles.closeIcon}
                startIcon={<CloseIcon />}
                variant="contained"
                onClick={() => setIsVisible(!isVisible)}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
