import React from "react";
import { Box, FormLabel } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const RadioFieldSetTitle = ({ prop }) => {
  const title = prop;
  const { bold } = mystyles();

  return (
    <FormLabel component="label" className={bold}>
      <Box>{title}</Box>
    </FormLabel>
  );
};
