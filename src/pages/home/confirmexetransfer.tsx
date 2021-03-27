import React from "react";
import { navigate } from "gatsby";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Withdrawlaccount } from "../../components/withdrawlaccount/style1"; //差分
import { ConfirmTransferaccount } from "../../components/confirmtransferaccount/style1"; //差分
import { ConfirmTransferDetail } from "../../components/confirmtransferdetail/style1"; //差分
import { Box, Button, Backdrop } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { Spinner } from "~/components/spinner/style1";
import { BackBtn } from "~/components/common/backbtn";

export default function ConfirmExeTransfer({ location }) {
  const { maincolumn, mainarea, backdrop } = mystyles();

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
    <LayoutHome location={location}>
      <Seo title={"振込"} />
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <Withdrawlaccount />
          <ConfirmTransferaccount />
          <ConfirmTransferDetail />
          <Box m={3}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleToggle}
            >
              実行
            </Button>
          </Box>
          <BackBtn />
        </Box>
      </Box>
      <Backdrop className={backdrop} open={open} onClick={handleClose}>
        <Spinner />
      </Backdrop>
    </LayoutHome>
  );
}
