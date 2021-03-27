import React, { useState } from "react";
import { ThemeProvider, Box, AppBar, Typography } from "@material-ui/core";
import { theme } from "~/styles/theme";
import { mystyles } from "~/styles/makestyles";
import { Drawersp } from "./molecular/drawersp";
import { Burgericon } from "./molecular/burgericon";
import { Logolink } from "./atomic/logolink";
import { Btnlogout } from "./atomic/btnlogout";

export const DrawerOpen = React.createContext();

export const Header = () => {
  const { headerinner, headerarea } = mystyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DrawerOpen.Provider value={[isOpen, setIsOpen]}>
      <ThemeProvider theme={theme}>
        <AppBar position="relative" elevation={0} className={headerarea}>
          <Box className={headerinner}>
            <Box display="flex">
              <Burgericon />
              <Box ml={1}>
                <Logolink />
              </Box>
            </Box>
            <Drawersp />
            <Box textAlign="right">
              <Typography variant="caption" component="h1">
                Internet Banking
              </Typography>
              <Btnlogout />
            </Box>
          </Box>
        </AppBar>
      </ThemeProvider>
    </DrawerOpen.Provider>
  );
};
