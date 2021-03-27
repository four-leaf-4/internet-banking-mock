import React from "react";
import { Box, Paper, Grid, Typography } from "@material-ui/core";

export const ProductDetailContent = ({ prop }) => {
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
      <Box m={3} py={3}>
        {/* <Box>{slug}</Box> 
        <Box>{date}</Box>h6
        <Box>{revise}</Box>*/}
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={1}
        >
          <Grid item sm={6} xs={12}>
            <Typography variant="h6">概要</Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="body1">{overview}</Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="h6">期間</Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="body1">{term}</Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="h6">金額</Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="body1">{price}</Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="h6">利息受取方法</Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="body1">{HowToReceiveInterest}</Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="h6">満期解約予約</Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="body1">{Maturity}</Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="h6">解約方法</Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="body1">{cancelable}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
