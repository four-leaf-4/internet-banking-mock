import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

export const HeadLine = ({ frontmatter }) => {
  const { date, title } = frontmatter;

  return (
    <Box py={1} px={3} bgcolor="primary.base">
      <Grid container justify="space-between">
        <Grid item sm={6}>
          <Typography variant="overline">{title}</Typography>
        </Grid>
        <Grid item sm={6}>
          <Box textAlign="right">
            <Typography variant="overline">{date}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
