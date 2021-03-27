import React from "react";
import { Typography, Box } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const Footer = () => {
  const { footerarea, footerinner } = mystyles();
  return (
    <Box component="footer" className={footerarea}>
      <Box mt={2} p={2} className={footerinner} bgcolor="primary.light">
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © 2020 Shimane bank Ltd."}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
