import React from "react";
import { Button } from "@material-ui/core";

export const ResendBtn = () => {
  const resend = (_event) => {
    alert("再送信しました");
  };

  return (
    <Button variant={"contained"} color={"secondary"} onClick={resend}>
      再送信
    </Button>
  );
};
