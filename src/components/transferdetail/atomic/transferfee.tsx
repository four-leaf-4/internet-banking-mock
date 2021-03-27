import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
// import FormLabel from '@material-ui/core/FormLabel'

export const TransferFee = () => {
  const [value, setValue] = React.useState("own");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">振込手数料</FormLabel> */}
      <RadioGroup
        aria-label="fee"
        name="fee1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="own" control={<Radio />} label="当方負担" />
        <FormControlLabel
          value="opponent"
          control={<Radio />}
          label="先方負担"
        />
      </RadioGroup>
    </FormControl>
  );
};
