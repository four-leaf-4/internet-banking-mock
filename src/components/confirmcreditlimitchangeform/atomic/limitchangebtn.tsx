import React, { useContext } from "react";
import { navigate } from "gatsby";
import { Backdrop, Box, Button } from "@material-ui/core";
import { CreditLimitContext } from "../creditlimitContext";
import { Spinner } from "~/components/spinner/style1";
import { mystyles } from "~/styles/makestyles";

export const LimitChangeBtn = () => {
  const { backdrop } = mystyles();

  const { creditlimit } = useContext(CreditLimitContext);

  const [open, setOpen] = React.useState(false);
  const handleToggle = () => {
    setOpen(!open);
    setTimeout(() => {
      navigate("/home/complete");
    }, 3 * 1000);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display="flex">
      <Button variant="contained" color="secondary" onClick={handleToggle}>
        実行
      </Button>
      <Backdrop className={backdrop} open={open} onClick={handleClose}>
        <Spinner />
      </Backdrop>
    </Box>
  );
};
