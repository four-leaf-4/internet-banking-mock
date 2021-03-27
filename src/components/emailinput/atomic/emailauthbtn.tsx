import React from "react";
import { Link, Button, Box } from "@material-ui/core";
import { Link as Gatsbylink } from "gatsby";

export const EmailAuthBtn = () => {
  return (
    <Box display="flex">
      <Button
        variant="contained"
        color="secondary"
        component={Gatsbylink}
        to={"/emailauth"}
      >
        メール送信
      </Button>
    </Box>
  );
};
