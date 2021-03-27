import React from "react";
import { Box, ListItem, Typography, Grid, Paper } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const ConfirmationCategory = ({ prop }) => {
  const { headline, value } = prop;
  const items = value.map((elm) => (
    <Grid key={elm.title} container justify="space-between">
      <Grid item sm={3} xs={12}>
        <Box mb={3}>
          <Typography variant="subtitle2" component="h4">
            {elm.title}
          </Typography>
        </Box>
      </Grid>
      <Grid item sm={9} xs={12}>
        <Box mb={3}>
          <Typography variant="subtitle2" align="right" component="p">
            {elm.value}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  ));
  const { subtitle } = mystyles();
  return (
    <Box mb={3}>
      <Typography variant="subtitle2" component="h4" className={subtitle}>
        {headline}
      </Typography>
      <Paper>
        <Box p={3} my={3}>
          {items}
        </Box>
      </Paper>
    </Box>
  );
};
