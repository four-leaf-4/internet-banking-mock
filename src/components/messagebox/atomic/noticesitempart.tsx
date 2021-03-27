import React from "react";
import { Typography } from "@material-ui/core";

export const NoticesItemPart = ({ prop }) => {
  const value = prop;

  return (
    <Typography component={"span"} variant="body2">
      {value}
    </Typography>
  );
};
