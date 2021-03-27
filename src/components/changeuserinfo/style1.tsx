import React from "react";
import { Grid } from "@material-ui/core";
import { CurrentInfo } from "./molecular/currentinfo";
import { ChangeItems } from "./molecular/changeitems";
import { ChangedInfo } from "./molecular/changedinfo";
import { ConfirmBtn } from "./atomic/confirmbtn";

export const ChangeUserInfo = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CurrentInfo />
      </Grid>
      <Grid item xs={12}>
        <ChangeItems />
      </Grid>
      <Grid item xs={12}>
        <ChangedInfo />
      </Grid>
      <Grid item xs={12}>
        <ConfirmBtn />
      </Grid>
    </Grid>
  );
};
