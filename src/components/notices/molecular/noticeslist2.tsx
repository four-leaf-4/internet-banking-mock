import React from "react";
import { List } from "@material-ui/core";
import { NoticesListItems } from "../atomic/noticeslistitems2";
import noticesarray from "../noticesarray.json";

export const NoticesList = () => {
  const array = noticesarray;
  const listitems = array.map((elm) => (
    <NoticesListItems key={elm.key} prop={elm} />
  ));

  return <List>{listitems}</List>;
};
