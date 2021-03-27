import React from "react";
import { Link as Gatsbylink } from "gatsby";
import { Box, Button } from "@material-ui/core";

export const ConfirmBtn = () => {
  const toPath = "confirm";
  return (
    <Box my={3} display="flex">
      <Button
        variant={"contained"}
        color={"secondary"}
        component={Gatsbylink}
        to={toPath}
      >
        確認
      </Button>
    </Box>
  );
};
