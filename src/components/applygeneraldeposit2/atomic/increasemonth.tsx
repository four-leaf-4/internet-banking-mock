import React, { useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Box, Paper, Typography } from "@material-ui/core";
import { LayoutHomeContext } from "~/components/templates/layoutHomeContext";
import { mystyles } from "~/styles/makestyles";

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
      <Paper>
        <Box p={3} my={3} textAlign="right">
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="INCREASE"
                control={<Radio />}
                label="あり"
                disabled={flag}
              />
              <FormControlLabel
                value="DECREASE"
                control={<Radio />}
                label="なし"
                disabled={flag}
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Paper>
    </Box>
  );
};
