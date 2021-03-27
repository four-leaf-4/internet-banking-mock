import React from "react";
import { Typography } from "@material-ui/core";

export const AccountNumber = (prop) => {
  const space = "：";

  return (
    <Typography variant="subtitle1" component="span">
      {space}
      {prop.value}
    </Typography>
  );
};

export default AccountNumber;
