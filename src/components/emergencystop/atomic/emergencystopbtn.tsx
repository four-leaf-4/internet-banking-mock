import React from "react";
import { Button } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const EmergencyStopBtn = () => {
  const { submitbutton } = mystyles();

  return (
    <Button variant="contained" className={submitbutton}>
      緊急停止
    </Button>
  );
};
