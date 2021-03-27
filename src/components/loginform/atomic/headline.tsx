import React from "react";
import { Typography, Box } from "@material-ui/core";

export const HeadLine = () => {
  return (
    <Typography align="center" variant="h6" component="h2">
      <Box color="primary.dark" mb={1}>
        TrustIDでログインする
      </Box>
    </Typography>
  );
};
