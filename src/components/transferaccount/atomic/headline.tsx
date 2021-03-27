import React from "react";
import { Typography } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const Headline = ({ prop }) => {
  const { subtitle } = mystyles();

  return (
    <Typography variant="subtitle2" component="h4" className={subtitle}>
      {prop.title}
    </Typography>
  );
};
