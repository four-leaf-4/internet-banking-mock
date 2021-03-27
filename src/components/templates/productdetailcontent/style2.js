import React from "react";
import { Box, Paper, Grid, Typography } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const ProductDetailContent = ({ prop }) => {
  const { transaction2 } = mystyles();
  const {
    // date,
    // slug,
    // revise,
    overview,
    term,
    price,
    HowToReceiveInterest,
    Maturity,
    cancelable,
  } = prop;

  return (
    <Paper>
      <Box m={2} py={1}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={1}
        >
          <Grid item sm={6} xs={12}>
            <Typography variant="subtitle1" className={transaction2}>
              概要
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="body1">{overview}</Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="subtitle1" className={transaction2}>
              期間
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="body1">{term}</Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="subtitle1" className={transaction2}>
              金額
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="body1">{price}</Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="subtitle1" className={transaction2}>
              利息受取方法
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="body1">{HowToReceiveInterest}</Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="subtitle1" className={transaction2}>
              満期解約予約
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="body1">{Maturity}</Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="subtitle1" className={transaction2}>
              解約方法
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="body2">{cancelable}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
