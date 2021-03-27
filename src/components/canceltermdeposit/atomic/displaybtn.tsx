import React from "react";
import { Box, Button } from "@material-ui/core";

export const DisplayBtn = () => {
  const hundleclick = () => {
    console.log("TEST");
  };

  return (
    <Box mt={3}>
      <Button
        onClick={hundleclick}
        variant="contained"
        color="secondary"
        size="small"
      >
        表示
      </Button>
    </Box>
  );
};
