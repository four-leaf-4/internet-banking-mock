import React from "react";
import { Typography } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const ItemBoxTitle = ({ prop }) => {
  const title = prop;
  const { transaction2 } = mystyles();

  return (
    <Typography component={"h5"} variant="subtitle2" className={transaction2}>
      {title}
    </Typography>
  );
};
