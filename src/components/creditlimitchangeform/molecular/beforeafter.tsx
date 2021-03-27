import React from "react";
import { Box, List, Paper } from "@material-ui/core";
import { BeforeLimit } from "../atomic/beforelimit";
import { AfterLimit } from "../atomic/afterlimit";

export const BeforeAfter = ({ prop }) => {
  const { beforelimit, afterlimit } = prop;

  return (
    <Box component={Paper} my={3}>
      <List>
        <BeforeLimit prop={beforelimit} />
        <AfterLimit prop={afterlimit} />
      </List>
    </Box>
  );
};
