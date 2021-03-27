import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { Headline } from "~/components/transferaccount/atomic/headline";
import { mystyles } from "~/styles/makestyles";

export const Totaldeposit = () => {
  const depositbalance = 100000;
  const date = new Date();
  console.log(date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const second = date.getSeconds();
  return (
    <Box>
      <Headline prop={{ title: "お預入れ合計" }} />
      <Paper>
        <Box p={2}>
          <Box textAlign="right" component="p">
            <Typography variant="h5" component="span">
              {depositbalance}
            </Typography>
            <Typography variant="h6" component="span">
              円
            </Typography>
          </Box>
          <Typography variant="caption">
            {year}年{month}月{day}日 {hour}:{minutes}:{second}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
