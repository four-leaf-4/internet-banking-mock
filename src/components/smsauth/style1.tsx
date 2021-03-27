import React from "react";
import { InputSMSs } from "~/components/inputauthsms/style1";
import { Caution } from "~/components/caution/style1";
import { Box, Typography } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const AuthsmsContent = () => {
  const { mainarea } = mystyles();
  return (
    <Box>
      <Box className={mainarea} component="section" bgcolor="primary.light">
        <Typography component="h3" variant="subtitle2">
          <Box mb={3} color="primary.dark">
            SMS認証
          </Box>
        </Typography>
        <Caution />
        <InputSMSs />
      </Box>
    </Box>
  );
};
