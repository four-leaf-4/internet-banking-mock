import React, { useContext } from "react";
import { Grid, ListItem, TextField } from "@material-ui/core";
import { CreditLimitContext } from "../creditlimitContext";
import { mystyles } from "~/styles/makestyles";

export const AfterLimit = ({ prop }) => {
  const afterlimit = prop;
  const { limitchange, creditlimit } = useContext(CreditLimitContext);
  const isDisabled = creditlimit.confirm;
  const { bold } = mystyles();
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <ListItem className={bold}>変更後限度額</ListItem>
      </Grid>
      <Grid item xs={12} sm={6}>
        <ListItem>
          <TextField
            id="after-limit"
            type="number"
            variant="outlined"
            fullWidth
            onChange={limitchange}
            defaultValue={afterlimit}
            InputLabelProps={{
              shrink: true,
            }}
            disabled={isDisabled}
          />
        </ListItem>
      </Grid>
    </Grid>
  );
};
