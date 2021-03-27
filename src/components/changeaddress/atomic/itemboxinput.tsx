import React, { useContext } from "react";
import { ListItem, TextField } from "@material-ui/core";
import { LayoutHomeContext } from "~/components/templates/layoutHomeContext";

export const ItemBoxInput = ({ prop }) => {
  const value = prop;
  const path = useContext(LayoutHomeContext);

  let isDisabled = false;
  switch (path.currentpath) {
    case "/home/confirmchangeaddress":
      isDisabled = true;
      break;
    default:
      isDisabled = false;
      break;
  }

  return (
    <ListItem>
      <TextField
        value={value}
        variant="outlined"
        fullWidth
        disabled={isDisabled}
      >
        {value}
      </TextField>
    </ListItem>
  );
};
