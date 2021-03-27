import React from "react";
import { Box, Typography, Paper, Grid } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { FormTransferPrice } from "~/components/transferdetail/atomic/formtransferprice";
import { Yearmonth } from "./atomic/yearmonthdatepicker";
import { Datepick } from "./atomic/date";
import { IncreaseRadioButton } from "~/components/applygeneraldeposit/atomic/increasemonth";

export const ConfirmationCategory2 = ({}) => {
  const date = "15日";
  const cycle = "毎月";
  const { subtitle } = mystyles();
  return (
    <Box>
      <Typography variant="subtitle2" component="h4" className={subtitle}>
        取引内容
      </Typography>
      <Paper>
        <Box p={3} my={3}>
          <Grid container justify="space-between">
            <Grid item sm={3} xs={12}>
              <Typography variant="subtitle2" component="h4">
                積立開始年月
              </Typography>
            </Grid>
            <Grid item sm={9} xs={12}>
              <Box mb={3}>
                <Yearmonth />
              </Box>
            </Grid>
            <Grid item sm={3} xs={12}>
              <Typography variant="subtitle2" component="h4">
                積立日
              </Typography>
            </Grid>
            <Grid item sm={9} xs={12}>
              <Box mb={3}>
                <Typography variant="subtitle2" align="right" component="p">
                  {date}
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={3} xs={12}>
              <Typography variant="subtitle2" component="h4">
                積立サイクル
              </Typography>
            </Grid>
            <Grid item sm={9} xs={12}>
              <Box mb={3}>
                <Typography variant="subtitle2" align="right" component="p">
                  {cycle}
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={3} xs={12}>
              <Typography variant="subtitle2" component="h4">
                積立金額
              </Typography>
            </Grid>
            <Grid item sm={9} xs={12}>
              <Box mb={3}>
                <FormTransferPrice />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <IncreaseRadioButton />
    </Box>
  );
};
