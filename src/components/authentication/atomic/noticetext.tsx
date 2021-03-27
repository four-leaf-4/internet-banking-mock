import React from "react";
import { Box, Typography } from "@material-ui/core";

export const NoticeText = () => {
  const text =
    "ご登録端末に通知を発信いたしました。\nご本人確認のためにご登録端末で認証を完了させてください。";

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
