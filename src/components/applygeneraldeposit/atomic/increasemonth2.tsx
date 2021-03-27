import React, { useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { LayoutHomeContext } from "../../templates/layoutHomeContext";
import { mystyles } from "../../../styles/makestyles";

export const IncreaseRadioButton = () => {
  const [value, setValue] = React.useState("INCREASE");
  const { subtitle } = mystyles();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const path = useContext(LayoutHomeContext);
  const currentpath = path.currentpath;

  let flag;
  switch (currentpath) {
    case "/home/confirmgeneraldeposit":
      flag = true;
      break;
    default:
      flag = false;
      break;
  }

  return (
    <Box component="section" my={3}>
      <Typography variant="subtitle2" component="h4" className={subtitle}>
        増額月の設定
      </Typography>
      <Box px={3}>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <Grid container>
              <Grid item>
                <FormControlLabel
                  value="INCREASE"
                  control={<Radio />}
                  label="あり"
                  disabled={flag}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  value="DECREASE"
                  control={<Radio />}
                  label="なし"
                  disabled={flag}
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
