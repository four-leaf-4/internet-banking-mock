import React, { useContext } from "react";
import { Drawer } from "@material-ui/core";
import { Globalmenu } from "~/components/globalnavigation/style2";
import { DrawerOpen } from "../style2";

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
    <Drawer anchor={"right"} open={isOpen} onClose={toggleDrawer(false)}>
      <Globalmenu isSP={true} />
    </Drawer>
  );
};
