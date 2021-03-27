import React from "react";
import { Box } from "@material-ui/core";
import { ApplyCompleteContent } from "./molecular/applycompletecontent";

export const ApplyComplete = () => {
  return (
    <Box my={3} component={"section"}>
      <ApplyCompleteContent />
    </Box>
  );
};
