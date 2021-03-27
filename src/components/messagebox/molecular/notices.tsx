import React, { useContext } from "react";
import { List } from "@material-ui/core";
import noticesdata from "../noticesdata.json";
import { NoticesItem } from "../atomic/noticesitem";
import { MessageListContext } from "~/components/messagelist/messagelistContext";

export const Notices = () => {
  const { head3 } = useContext(MessageListContext);
  const arraynotices = head3;
  const notices = arraynotices.map((elm) => (
    <NoticesItem key={elm.key} prop={elm} />
  ));

  return <List>{notices}</List>;
};
