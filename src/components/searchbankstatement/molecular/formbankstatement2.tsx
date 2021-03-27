import React, { useState } from "react";
import { Box, Button, Grid, Paper } from "@material-ui/core";
import { Bankaccount } from "./bankaccount2";
import { Term } from "./term2";

export const Formbankstatement = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box mb={3}>
      <Grid container justify="space-between" spacing={1}>
        <Grid item xs={12}>
          <Bankaccount />
        </Grid>
        <Grid item xs={12}>
          <Term />
        </Grid>
      </Grid>
      <Box mt={1}>
        <Button variant="contained" color="secondary" size="small">
          検索
        </Button>
      </Box>
    </Box>
  );
};
