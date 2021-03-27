import React from "react";
import { Box, Typography } from "@material-ui/core";

export const HeadLine = ({ frontmatter }) => {
  const { date, title } = frontmatter;

  return (
    <Box py={1} px={3} bgcolor="primary.base">
      <Typography>{date}</Typography>
      <Typography>{title}</Typography>
    </Box>
  );
};
