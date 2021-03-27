import React from "react";
import { Typography } from "@material-ui/core";

export const LineDescription = (prop) => {
  const { text } = prop;

  return (
    <Typography
      align="left"
      component="p"
      variant="body2"
      color="textSecondary"
    >
      {text}
    </Typography>
  );
};
