import React from "react";
import { Typography } from "@material-ui/core";

export const LastCrumb = ({ prop }) => {
  const { crumbtitlejp } = prop;

  return (
    <Typography variant="caption" component="span">
      {crumbtitlejp}
    </Typography>
  );
};
