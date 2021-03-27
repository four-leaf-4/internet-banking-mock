import React from "react";
import { Box, Typography, ListItem } from "@material-ui/core";
import customerinfo from "./customerinfo.json";
import { InfoList } from "./molecular/infolist2";
import { mystyles } from "~/styles/makestyles";

export const CustomerInfo = () => {
  const info = customerinfo;
  const { subtitle } = mystyles();

  const category = info.map((elm, index) => (
    <Box key={index} mb={3}>
      <Typography className={subtitle} variant="subtitle2" component="h4">
        {elm.headline}
      </Typography>
      <ListItem>
        <InfoList prop={elm.value} />
      </ListItem>
    </Box>
  ));

  return <Box>{category}</Box>;
};
