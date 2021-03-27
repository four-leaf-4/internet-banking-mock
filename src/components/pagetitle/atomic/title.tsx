import React from "react";
import { Typography } from "@material-ui/core";
import { getTitle } from "~/modules/catalog/title.ts";

export const Title = () => {
  const pageTitle = getTitle();

  return (
    <Typography
      align="center"
      variant="body1"
      component="h2"
      style={{ position: "relative" }}
      color="textSecondary"
    >
      {pageTitle}
    </Typography>
  );
};
