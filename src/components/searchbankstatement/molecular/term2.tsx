import React, { useState } from "react";
import { Box, Grid, Hidden, Typography } from "@material-ui/core";
import { Datepicker } from "../atomic/datepicker";
import { mystyles } from "~/styles/makestyles";

export const Term = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54"),
  );
  const { subtitle, subtitle3 } = mystyles();
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Box>
      <Typography variant="caption" component="h4" className={subtitle}>
        期間
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Hidden smUp>
          <Typography className={subtitle3} component="h4">
            開始
          </Typography>
        </Hidden>
        <Grid item sm={5} xs={12}>
          <Datepicker prop={{ value: "START" }} />
        </Grid>
        <Hidden xsDown>
          <Grid item sm={1}>
            <Box textAlign="center" component="p">
              ～
            </Box>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Typography className={subtitle3} component="h4">
            終了
          </Typography>
        </Hidden>
        <Grid item sm={5} xs={12}>
          <Datepicker prop={{ value: "END" }} />
        </Grid>
      </Grid>
    </Box>
  );
};
