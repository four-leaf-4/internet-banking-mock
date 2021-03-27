import React from "react";
import { Box, List, Paper } from "@material-ui/core";
import { BeforeLimit } from "../atomic/beforelimit2";
import { AfterLimit } from "../atomic/afterlimit2";

export const BeforeAfter = ({ prop }) => {
  const { beforelimit, afterlimit } = prop;

  return (
    <Box my={3}>
      <List>
        <BeforeLimit prop={beforelimit} />
        <AfterLimit prop={afterlimit} />
      </List>
    </Box>
  );
};
