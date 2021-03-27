import React from "react";
import { navigate } from "gatsby";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Withdrawlaccount } from "../../components/withdrawlaccount/style1"; //差分
import { WireTransferaccount } from "../../components/wiretransferaccount/style1"; //差分
import { BackBtn } from "~/components/common/backbtn";
import { Box, Button } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export default function ExeWireTransfer({ location }) {
  const { maincolumn, mainarea } = mystyles();
  const confirm = (_event) => {
    navigate("/home/confirmexewiretransfer");
  };
  return (
    <LayoutHome location={location}>
      <Seo title={"振替"} />
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <Withdrawlaccount />
          <WireTransferaccount />
          <Box mt={1}>
            <Button variant="contained" color="secondary" onClick={confirm}>
              入力内容を確認する
            </Button>
          </Box>
          <BackBtn />
        </Box>
      </Box>
    </LayoutHome>
  );
}
