import React from "react";
import { navigate } from "gatsby";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Withdrawlaccount } from "../../components/withdrawlaccount/style1"; //差分
import { ConfimWireTransferaccount } from "../../components/confirmwiretransferaccount/style1"; //差分
import { Backdrop, Box, Button } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { BackBtn } from "~/components/common/backbtn";
import { Spinner } from "~/components/spinner/style1";

export default function ExeWireTransfer({ location }) {
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

  const app = (_event) => {
    navigate("/home/deviceauth");
  };
  return (
    <LayoutHome location={location}>
      <Seo title={"振替"} />
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <Withdrawlaccount />
          <ConfimWireTransferaccount />
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
