import React from "react";
import { Box } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { Infolinkslistmenu } from "./molecular/infolinkslistmenu";

export const Infolinkslist = () => {
  const { listlinksarea } = mystyles();
  return (
    <Box
      component="section"
      m={2}
      className={listlinksarea}
      bgcolor="primary.light"
    >
      <Infolinkslistmenu />
    </Box>
  );
};
