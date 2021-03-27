import React from "react";
import { Typography } from "@material-ui/core";

export const ItemBoxTitle = ({ prop }) => {
  const title = prop;

  return (
    <Typography component={"h5"} variant="subtitle2">
      {title}
    </Typography>
  );
};
