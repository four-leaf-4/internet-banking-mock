import React from "react";
import { ListItem, Grid } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const BeforeLimit = ({ prop }) => {
  const beforelimit = prop;
  const { bold } = mystyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <ListItem className={bold}>変更前限度額</ListItem>
      </Grid>
      <Grid item xs={12} sm={6}>
        <ListItem>{beforelimit}</ListItem>
      </Grid>
    </Grid>
  );
};
