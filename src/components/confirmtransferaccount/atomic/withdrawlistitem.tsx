import React, { useState } from "react";
import { ListItem, Box } from "@material-ui/core";

export const Withdrawlistitem = ({ prop }) => {
  const { dt, dd } = prop;
  return (
    <Box style={{ display: "flex" }}>
      <ListItem component={"dt"}>{dt}</ListItem>
      <ListItem component={"dd"}>{dd}</ListItem>
    </Box>
  );
};
