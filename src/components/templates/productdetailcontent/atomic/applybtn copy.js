import React from "react";
import { navigate } from "gatsby";
import { Button, Box } from "@material-ui/core";

export const ApplyBtn = ({ prop }) => {
  const { productID, title } = prop;
  const onClick = (_event) => {
    navigate("/home/applytermdeposit");
  };
  return (
    <Box m={3}>
      <Button
        variant="contained"
        color="secondary"
        onClick={onClick}
        state={{ productID, title }}
      >
        申込
      </Button>
    </Box>
  );
};
