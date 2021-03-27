import React from "react";
import { List } from "@material-ui/core";
import arraywithdrawaccount from "../arraywithdrawaccount.json";
import { Withdrawlistitem } from "../atomic/withdrawlistitem";

export const Withdrawlist = () => {
  const array = arraywithdrawaccount;
  const list = array.map((elm) => <Withdrawlistitem prop={elm} key={elm.id} />);
  return <List component={"dl"}>{list}</List>;
};
