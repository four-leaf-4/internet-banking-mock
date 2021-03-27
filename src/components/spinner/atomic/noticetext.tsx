import React from "react";
import { Box, Typography } from "@material-ui/core";

export const NoticeText = () => {
  const text =
    "TrustIDアプリに通知が送られました。\nアプリからご本人確認を行ってください";

  const tarray = text.split("\n");
  const t = tarray.map((elm, index) => (
    <Typography align="left" component="p" variant="body2" key={index}>
      <Box color="primary.dark" component="span">
        {elm}
      </Box>
    </Typography>
  ));

  return <Box my={3}>{t}</Box>;
};
