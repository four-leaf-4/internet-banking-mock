import React from "react";
import { navigate } from "gatsby";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Backdrop, Box, Button } from "@material-ui/core";
import { ConfirmationCategory } from "~/components/applygeneraldeposit/style1";
import { mystyles } from "~/styles/makestyles";
import { BackBtn } from "~/components/common/backbtn";
import { Spinner } from "~/components/spinner/style1";
export default function PageConfirmTermDeposit({ location }) {
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
      <Seo title={"定期預金作成"} />
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
              headline: "預入口座",
              value: [
                { title: "預入口座", value: "xxx銀行 zzz支店 普通口座987987" },
              ],
            }}
          />
          <ConfirmationCategory
            prop={{
              headline: "出金口座",
              value: [
                { title: "出金口座", value: "ppp銀行 nnn支店 普通口座321321" },
                { title: "金額", value: "987000円" },
              ],
            }}
          />
          <ConfirmationCategory
            prop={{
              headline: "満期取り扱い",
              value: [
                { title: "満期取り扱い", value: "元金" },
                { title: "払い戻し口座", value: "ｘｘｘ銀行" },
              ],
            }}
          />
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
