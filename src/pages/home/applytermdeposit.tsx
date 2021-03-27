import React from "react";
import { navigate } from "gatsby";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Box, Button } from "@material-ui/core";
import { ConfirmationCategory } from "~/components/applygeneraldeposit/style1";
import { FormTransferPrice } from "~/components/transferdetail/atomic/formtransferprice";
import { mystyles } from "~/styles/makestyles";
import { BackBtn } from "~/components/common/backbtn";

export default function PageConfirmTermDeposit({ location }) {
  console.log(location.state);
  // const [id, password] = location.state
  // const { title } = location.state
  const title = "title";
  const { maincolumn, mainarea } = mystyles();

  const back = (_event) => {
    history.back();
  };
  const confirm = (_event) => {
    navigate("/home/confirmtermdeposit");
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
              ],
            }}
          />
          <Box my={3}>
            <FormTransferPrice />
          </Box>
          <ConfirmationCategory
            prop={{
              headline: "満期取り扱い",
              value: [
                { title: "満期取り扱い", value: "元金" },
                { title: "払い戻し口座", value: "ｘｘｘ銀行" },
              ],
            }}
          />
          <Box mb={3}>
            <Button
              variant="contained"
              color="secondary"
              onClick={confirm} /* state={{ title }} */
            >
              確認
            </Button>
          </Box>
          <BackBtn />
        </Box>
      </Box>
    </LayoutHome>
  );
}
