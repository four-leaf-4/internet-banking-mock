import React from "react";
import { Button, Box } from "@material-ui/core";

export const BackBtn = () => {
  const onClick = (_event) => {
    history.back();
  };
  return (
    <Box my={3}>
      <Button variant="contained" onClick={onClick}>
        戻る
      </Button>
    </Box>
  );
};
