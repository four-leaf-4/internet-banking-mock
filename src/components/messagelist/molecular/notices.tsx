import React, { useContext } from "react";
import { List } from "@material-ui/core";
import { NoticesItem } from "~/components/messagebox/atomic/noticesitem";
import { MessageListContext } from "../messagelistContext";

export const Notices = () => {
  const { currentState } = useContext(MessageListContext);
  const arraynotices = currentState;
  const notices = arraynotices.map((elm) => (
    <NoticesItem key={elm.key} prop={elm} />
  ));

  return <List>{notices}</List>;
};
