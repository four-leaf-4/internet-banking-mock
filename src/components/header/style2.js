import React, { useState } from "react";
import {
  ThemeProvider,
  Box,
  AppBar,
  Hidden,
  Typography,
  Grid,
} from "@material-ui/core";
import { theme } from "~/styles/theme";
import { mystyles } from "~/styles/makestyles";
import { Drawersp } from "./molecular/drawersp2";
import { Burgericon } from "./molecular/burgericon2";
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
            <Grid container justify="space-between">
              <Grid item>
                <Logolink />
              </Grid>
              <Grid item>
                <Burgericon />
              </Grid>
            </Grid>
            <Drawersp />
            <Hidden smDown>
              <Box textAlign="right" display="block" whiteSpace="nowrap">
                <Typography variant="caption" component="h1">
                  Internet Banking
                </Typography>
                <Btnlogout />
              </Box>
            </Hidden>
          </Box>
        </AppBar>
      </ThemeProvider>
    </DrawerOpen.Provider>
  );
};
