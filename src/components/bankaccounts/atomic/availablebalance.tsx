import React from "react";
import { Typography } from "@material-ui/core";

export const Availablebalance = (prop) => {
  return <Typography>利用可能残高：{prop.value}</Typography>;
};

export default Availablebalance;
