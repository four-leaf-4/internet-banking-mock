import React from "react";
import { Box, InputAdornment, OutlinedInput } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const FormTransferPrice = () => {
  const [values, setValues] = React.useState({
    yen: "",
  });
  const { priceinput } = mystyles();
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Box>
      {/* <FormHelperText id="standard-weight-helper-text">振込金額</FormHelperText> */}
      <OutlinedInput
        id="standard-adornment-weight"
        value={values.yen}
        className={priceinput}
        fullWidth
        onChange={handleChange("yen")}
        endAdornment={<InputAdornment position="end">円</InputAdornment>}
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          "aria-label": "yen",
        }}
      />
    </Box>
  );
};
