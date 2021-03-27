import React, { useContext } from "react";
import { Box, Grid } from "@material-ui/core";
import { ChangeUserInfoContext } from "~/components/changeuserinfo/changeuserinfoContext";
import { DisplayField } from "../atomic/displayfield";

export const ConfirmItem = ({ prop }) => {
  const context = useContext(ChangeUserInfoContext);
  const { currentinfo, changedinfo } = context.state;
  const currentmail = arrayfind(currentinfo, "current-mailaddress");
  const currentpassword = arrayfind(currentinfo, "current-password");
  const changedmail = arrayfind(changedinfo, "changed-mailaddress");
  const changedpassword = arrayfind(changedinfo, "changed-password");

  function arrayfind(array, id) {
    return array.find((elm) => elm.id === id);
  }

  let current;
  let changed;
  switch (prop) {
    case "mail":
      current = currentmail;
      changed = changedmail;
      break;
    case "password":
      current = currentpassword;
      changed = changedpassword;
      break;
    default:
      break;
  }
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6}>
        <DisplayField prop={current} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DisplayField prop={changed} />
      </Grid>
    </Grid>
  );
};
