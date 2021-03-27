import React, { useContext } from "react";
import { navigate } from "gatsby";
import { Backdrop, Box, Button } from "@material-ui/core";
import { GlobalStateContext } from "~/context/GlobalContextProvider";
import { mystyles } from "~/styles/makestyles";
import { Spinner } from "~/components/spinner/style1";

export const LoginBtn = () => {
  const { isDisabled } = useContext(GlobalStateContext);
  const { backdrop } = mystyles();
  const [open, setOpen] = React.useState(false);
  const handleToggle = () => {
    setOpen(!open);
    setTimeout(() => {
      navigate("/home");
    }, 3 * 1000);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const hundleSubmit = () => {
  //   navigate("/login");
  // };

  return (
    <Box>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={handleToggle}
        disabled={isDisabled}
      >
        ログイン
      </Button>
      <Backdrop className={backdrop} open={open} onClick={handleClose}>
        <Spinner />
      </Backdrop>
    </Box>
  );
};
