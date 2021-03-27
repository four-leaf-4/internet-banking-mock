import React from "react";
import { Box, Typography } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const HeadLineTitle = () => {
  const { bold } = mystyles();

  return (
    <Box display="flex">
      <Typography variant="subtitle1" component="h3">
        メッセージボックス
      </Typography>
    </Box>
  );
};
