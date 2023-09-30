import { atom } from "recoil";
import { getData } from "../utils/data";

export const ShowActivity = atom({
  key: "showActivity",
  default: false,
});

export const showDialog = atom({
  key: "showDialog",
  default: false,
});

export const uidOfListItem = atom({
  key: "uidOfListItem",
  default: localStorage.getItem("uidOfListItem"),
});

export const list = atom({
  key: "list",
  default: getData(),
});

export const atomListUid = atom({
  key: "atomListUid",
  default: localStorage.getItem("itemid"),
});

export const atomCardName = atom({
  key: "atomCardName",
  default: localStorage.getItem("cardName"),
});
