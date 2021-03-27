import React, { useContext } from "react";
import { Hidden } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import MenuIcon from "@material-ui/icons/Menu";

import { DrawerOpen } from "../style2";

export const Burgericon = () => {
  const { drawericon } = mystyles();
  const [isOpen, setIsOpen] = useContext(DrawerOpen);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    if (!isOpen) {
      setIsOpen(open);
    }
  };

  return (
    <Hidden mdUp>
      <MenuIcon
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        edge="start"
        className={drawericon}
      ></MenuIcon>
    </Hidden>
  );
};

export default Burgericon;
