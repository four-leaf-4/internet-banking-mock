import React from "react";
import { Link as Gatsbyling } from "gatsby";
import { Box, Button } from "@material-ui/core";

export const ToListBtn = () => {
  return (
    <Box display="flex">
      <Button
        component={Gatsbyling}
        to={"/home/messagelist"}
        variant="contained"
      >
        一覧へ戻る
      </Button>
    </Box>
  );
};
