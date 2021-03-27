import React, { useState } from "react";
import { Typography, Grid, Box, Paper } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const BSLayout = (prop) => {
  const { id, date, designateddate, account, price } = prop.data;
  const { transaction, status } = mystyles();

  return (
    <Paper>
      <Box p={3} my={3}>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <Typography variant="body2" className={transaction}>
              受付番号
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="body2" className={status}>
              {id}
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="body2" className={transaction}>
              取引金額
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="body2" className={status}>
              {price}
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="body2" className={transaction}>
              指定日
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="body2" className={status}>
              {designateddate}
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="body2" className={transaction}>
              引落口座
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="body2" className={status}>
              {account}
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="body2" className={transaction}>
              受付日時
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="body2" className={status}>
              {date}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
