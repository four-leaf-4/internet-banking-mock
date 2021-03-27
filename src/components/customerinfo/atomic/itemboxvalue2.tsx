import React, { useContext } from "react";
import { Box, Paper } from "@material-ui/core";
import { ItemBoxInput } from "~/components/changeaddress/atomic/itemboxinput";
import { LayoutHomeContext } from "~/components/templates/layoutHomeContext";

export const ItemBoxValue = ({ prop }) => {
  const value = prop;
  const path = useContext(LayoutHomeContext);

  let targetcomponent;
  switch (path.currentpath) {
    case "/home/changeaddress":
      targetcomponent = <ItemBoxInput prop={value} />;
      break;
    case "/home/confirmchangeaddress":
      targetcomponent = <ItemBoxInput prop={value} />;
      break;
    default:
      targetcomponent = (
        <Box mb={2} p={2} component={Paper}>
          {value}
        </Box>
      );
      break;
  }

  return <Box mt={1}>{targetcomponent}</Box>;
};
