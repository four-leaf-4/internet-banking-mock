import React from "react";
import { Typography } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const HeadLineTitle = () => {
  const { subtitle2 } = mystyles();
  return (
    <Typography
      align="center"
      variant="subtitle1"
      component="h3"
      className={subtitle2}
    >
      メッセージ一覧
    </Typography>
  );
};
