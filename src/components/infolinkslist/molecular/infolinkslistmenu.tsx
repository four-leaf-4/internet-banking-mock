import React from "react";
import { List } from "@material-ui/core";
import { Infolinkslistitem } from "../atomic/infolinkslistitem";
import arrayinfolink from "../../infolinkslist/arrayinfolink.json";

export const Infolinkslistmenu = () => {
  const data = arrayinfolink;
  const listitems = data.map((elm) => (
    <Infolinkslistitem key={elm.id} data={elm} />
  ));

  return <List aria-label="main mailbox folders">{listitems}</List>;
};
