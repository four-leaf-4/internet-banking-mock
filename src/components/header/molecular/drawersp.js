import React, { useContext } from "react";
import { Drawer } from "@material-ui/core";
import { Globalmenu } from "~/components/globalnavigation/style1";
import { DrawerOpen } from "../style1";

export const Drawersp = () => {
  const [isOpen, setIsOpen] = useContext(DrawerOpen);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <Drawer anchor={"left"} open={isOpen} onClose={toggleDrawer(false)}>
      <Globalmenu isSP={true} />
    </Drawer>
  );
};
