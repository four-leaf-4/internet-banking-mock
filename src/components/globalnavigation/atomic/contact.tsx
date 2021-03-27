import React from "react";
import { mystyles } from "~/styles/makestyles";
import { Box, Typography } from "@material-ui/core";

export const Contact = () => {
  const { informationarea } = mystyles();
  return (
    <Box className={informationarea}>
      <Typography align="center" variant="caption" component="h4" noWrap>
        お問合せ番号
      </Typography>
      <Typography align="center" variant="h6" component="p">
        000-000-0000
      </Typography>
    </Box>
  );
};

export default Contact;
