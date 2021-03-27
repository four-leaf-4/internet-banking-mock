import React from "react";
import { navigate } from "gatsby";
import { TableCell, Button, Box, Backdrop } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { Spinner } from "~/components/spinner/style1";
export const CancelBtn = (prop) => {
  const { cancelable } = prop;
  const { submitbutton, backdrop } = mystyles();
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
    <TableCell align="right">
      <Box my={1}>
        <Button
          disabled={cancelable}
          variant="contained"
          className={submitbutton}
          onClick={handleToggle}
        >
          解約
        </Button>
      </Box>
      <Backdrop className={backdrop} open={open} onClick={handleClose}>
        <Spinner />
      </Backdrop>
    </TableCell>
  );
};
