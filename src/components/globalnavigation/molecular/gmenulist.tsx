import React from "react";
import { List } from "@material-ui/core";
import { Gmenulistitem } from "../atomic/gmenulistitem";
import arraymenu from "../../globalnavigation/arraymenu.json";

export const Globalmenulist = () => {
  const data = arraymenu;
  const listitems = data.map((elm) => (
    <Gmenulistitem key={elm.id} data={elm} />
  ));

  return <List aria-label="main mailbox folders">{listitems}</List>;
};
