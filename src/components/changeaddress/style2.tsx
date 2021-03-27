import React, { useContext } from "react";
import { Box, Typography } from "@material-ui/core";
import { InfoList } from "~/components/customerinfo/molecular/infolist2";
import { ConfirmBtn } from "./atomic/confirmbtn";
import { LayoutHomeContext } from "~/components/templates/layoutHomeContext";
import customerinfo from "./customerinfo.json";
import creditlimitinfo from "./creditlimitinfo.json";
import { mystyles } from "~/styles/makestyles";

export const ChangeAddressForm = () => {
  const path = useContext(LayoutHomeContext);
  const { subtitle } = mystyles();

  // const info = customerinfo

  let info;
  switch (path.currentpath) {
    case "/home/customerinfo":
      info = customerinfo;
      break;
    case "/home/creditlimitchange":
      info = creditlimitinfo;
      break;
    default:
      info = customerinfo;
      break;
  }

  const category = info.map((elm, index) => (
    <Box key={index} mb={3}>
      <Typography variant="subtitle2" component="h4" className={subtitle}>
        {elm.headline}
      </Typography>
      <InfoList prop={elm.value} />
    </Box>
  ));

  return (
    <Box component="section">
      {category}
      <ConfirmBtn />
    </Box>
  );
};
