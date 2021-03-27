import React from "react";
import { Authentication } from "~/components/authentication/style1";
import { Box } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const BiometricAuth = () => {
  const { mainarea } = mystyles();
  return (
    <Box>
      <Box className={mainarea} component="section" bgcolor="primary.light">
        <Authentication />
      </Box>
    </Box>
  );
};
