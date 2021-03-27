import React from "react";
import { Typography, Box } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const Footer = () => {
  const { footerarea, footerinner } = mystyles();
  return (
    <Box component="footer" className={footerarea}>
      <Box mt={2} p={1} className={footerinner} bgcolor="primary.light">
        <Typography
          variant="caption"
          color="textSecondary"
          bgcolor="primary.light"
          align="center"
        >
          {"Copyright (c) 2020 Shimane bank Ltd. All Rights Reserved."}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
