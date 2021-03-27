import React from "react";
import { Link as gatsbylink } from "gatsby";
import { Box, Typography, Paper, Grid, Button } from "@material-ui/core";

export const Accountbalance = () => {
  const price = 100000;
  const time = "2020/12/31 10:11";
  return (
    <Box>
      <Box mb={2}>
        <Grid container justify="space-between" spacing={1}>
          <Grid item>
            <Typography variant="subtitle1" component="h3">
              口座残高 style2
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              component={gatsbylink}
              to="/home/bankstatement"
              size="small"
              color="secondary"
            >
              入出金明細はこちら
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Paper>
        <Box p="1rem">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="caption" component="p">
                普通預金口座 xxxxxxx
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption" component="p">
                残高
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="right" variant="subtitle2" component="p">
                {price}円
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box mt={3}>
                <Typography align="right" variant="caption" component="p">
                  照会日時 {time}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};
