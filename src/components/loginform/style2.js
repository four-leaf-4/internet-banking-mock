import React, { useState } from "react";
import { navigate } from "gatsby";
import {
  Button,
  Typography,
  TextField,
  Box,
  ThemeProvider,
} from "@material-ui/core";
import { theme } from "~/styles/theme";
import { mystyles } from "~/styles/makestyles";

export const Loginform = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const hundleInput = (event) => {
    console.log(event.target);
    if (event.target.id === "input-loginid") {
      setId(event.target.value);
    } else if (event.target.id === "input-loginpassword") {
      setPassword(event.target.value);
    }
  };
  const hundleSubmit = (_event) => {
    navigate("/login", { state: { id, password } });
  };
  const { textfield } = mystyles();
  return (
    <ThemeProvider theme={theme}>
      <Box component="section" bgcolor="primary.light">
        <Typography align="center" variant="h6" component="h2">
          TrustIDでログインする
        </Typography>
        <form className={formRoot} noValidate autoComplete="off">
          <TextField
            required
            id="input-loginid"
            label="ログインID"
            variant="outlined"
            className={textfield}
            onChange={hundleInput}
          />
          <TextField
            id="input-loginpassword"
            label="パスワード"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            className={textfield}
            onChange={hundleInput}
          />
        </form>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={hundleSubmit}
        >
          ログイン
        </Button>
      </Box>
    </ThemeProvider>
  );
};
