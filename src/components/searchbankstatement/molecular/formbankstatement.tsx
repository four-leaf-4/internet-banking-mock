import React, { useState } from "react";
import { Box, Button, Grid, Paper } from "@material-ui/core";
import { Bankaccount } from "./bankaccount";
import { Term } from "./term";

export const Formbankstatement = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box mb={3}>
      <Grid container justify="space-between" spacing={3}>
        <Grid item xs={12} md={4}>
          <Bankaccount />
        </Grid>
        <Grid item xs={12} md={8}>
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
