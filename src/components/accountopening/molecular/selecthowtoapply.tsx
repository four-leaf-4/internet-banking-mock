import React, { useContext, useState } from "react";
import { Typography, Box, Button, Grid } from "@material-ui/core";
import { OnlineApply } from "./onlineapply";
import { MailApply } from "./mailapply";
import { AccountOpeningContext } from "../accountopeningContext";

export const SelectHowtoApply = () => {
  const { prevStep } = useContext(AccountOpeningContext);

  return (
    <Box>
      <Typography component="h3" variant="subtitle2">
        <Box color="primary.dark" component="span">
          申込方法の選択
        </Box>
      </Typography>
      <Box mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <OnlineApply />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MailApply />
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Button variant="contained" onClick={prevStep}>
          戻る
        </Button>
      </Box>
    </Box>
  );
};
