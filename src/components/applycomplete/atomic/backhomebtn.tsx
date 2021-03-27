import React from "react";
import { navigate } from "gatsby";
import { Box, Button } from "@material-ui/core";

export const BackHomeBtn = () => {
  const onClick = (_event) => {
    navigate("/home");
  };
  return (
    <Box>
      <Button variant="contained" onClick={onClick}>
        TOPへ戻る
      </Button>
    </Box>
  );
};
