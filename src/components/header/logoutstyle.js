import React from "react";
import { ThemeProvider, Box, AppBar } from "@material-ui/core";
import { theme } from "~/styles/theme";
import { mystyles } from "~/styles/makestyles";
import { Logolink } from "./atomic/logolink";

export const Header = () => {
  const { headerarea, headerinner } = mystyles();
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative" elevation={0} className={headerarea}>
        <Box className={headerinner}>
          <Box ml={1}>
            <Logolink />
          </Box>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
};
