import React, { useContext } from "react";
import { Typography, Box, Paper } from "@material-ui/core";
import { RadioFieldSet } from "./radiofieldset";
import { MailNoticesContext } from "../mailnoticesContext";
import { mystyles } from "~/styles/makestyles";

export const MailNoticesSettingForm = () => {
  const context = useContext(MailNoticesContext);
  const targetarray = context.state;
  console.log(targetarray);
  const { subtitle } = mystyles();

  const items = targetarray.map((elm, index) => (
    <Box key={index}>
      <Typography className={subtitle}>{elm.headline}</Typography>
      <RadioFieldSet prop={elm} />
    </Box>
  ));

  return (
    <Box component={Paper} p={3}>
      {items}
    </Box>
  );
};
