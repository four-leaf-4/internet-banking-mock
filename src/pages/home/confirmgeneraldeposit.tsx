import React from "react";
import { navigate } from "gatsby";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Backdrop, Box, Button } from "@material-ui/core";
import { ConfirmationCategory } from "~/components/applygeneraldeposit/style1";
import { IncreaseRadioButton } from "~/components/applygeneraldeposit/atomic/increasemonth";
import { mystyles } from "~/styles/makestyles";
import { BackBtn } from "~/components/common/backbtn";
import { Spinner } from "~/components/spinner/style1";

export default function PageConfirmGeneralDeposit({ location }) {
  console.log(location.state);
  const title = "title";
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
      <Seo title={"termdeposit"} />
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <ConfirmationCategory
            prop={{
              headline: "商品",
              value: [{ title: "商品", value: title }],
            }}
          />
          <ConfirmationCategory
            prop={{
              headline: "出金口座",
              value: [
                { title: "出金口座", value: "ppp銀行 nnn支店 普通口座321321" },
              ],
            }}
          />
          <ConfirmationCategory
            prop={{
              headline: "取引内容",
              value: [
                { title: "積み立て開始", value: "元金" },
                { title: "積み立て日", value: "15日" },
                { title: "サイクル", value: "毎月" },
                { title: "金額", value: 0 },
              ],
            }}
          />
          <IncreaseRadioButton />
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
