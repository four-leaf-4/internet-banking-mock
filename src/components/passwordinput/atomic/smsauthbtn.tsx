import React from "react";
import { Button, Box } from "@material-ui/core";
import { Link as Gatsbylink } from "gatsby";

export const SMSauthBtn = () => {
  return (
    <Box display="flex">
      <Button
        variant="contained"
        color="secondary"
        component={Gatsbylink}
        to={"/authsms"}
        state={{ prevPath: "/" }}
      >
        送信
      </Button>
    </Box>
  );
};
