import React, { useContext } from "react";
import { Box, Button } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";
import { Caution } from "~/components/caution/style1";

export const CautionaryPoints = () => {
  const { nextStep } = useContext(AccountOpeningContext);

  return (
    <Box>
      <Caution />
      <Button variant="contained" color="secondary" onClick={nextStep}>
        口座開設申込
      </Button>
    </Box>
  );
};
