import React from "react";
import { Box } from "@material-ui/core";
import { InputBaseSMS } from "../atomic/inputbasesms";

export const InputSMS = () => {
  const arrayid = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  const inputsms = arrayid.map(({ id }) => <InputBaseSMS key={id} prop={id} />);
  return (
    <Box display="flex" my={3} justifyContent="center">
      <form>{inputsms}</form>
    </Box>
  );
};
