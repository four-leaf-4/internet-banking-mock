import React from "react";
import { Button, Box } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const BackBtn = () => {
  const { backbtn } = mystyles();
  const onClick = (_event) => {
    history.back();
  };
  return (
    <Box my={3}>
      <Button
        variant="contained"
        color="default"
        className={backbtn}
        onClick={onClick}
      >
        戻る
      </Button>
    </Box>
  );
};
