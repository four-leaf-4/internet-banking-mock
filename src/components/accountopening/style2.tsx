import React, { useContext } from "react";
import { Box } from "@material-ui/core";
import { OpenGuide } from "./molecular/openguide2";
import { CautionaryPoints } from "./molecular/cautionarypoints";
import { TermsofService } from "./molecular/termsofservice2";
import { SelectHowtoApply } from "./molecular/selecthowtoapply2";
import { AccountOpeningContext } from "./accountopeningContext";
import { RegisterCustomerInfo } from "./molecular/registercustomerinfo2";
import { EmailAuth } from "~/components/emailauthcodeinput/style1";
import { mystyles } from "~/styles/makestyles";

export const AccountOpening = () => {
  const { currenttitle } = useContext(AccountOpeningContext);
  console.log(currenttitle);
  let component;
  switch (currenttitle) {
    case "注意事項":
      component = <CautionaryPoints />;
      break;
    case "ご利用規約":
      component = <TermsofService />;
      break;
    case "申込方法の選択":
      component = <SelectHowtoApply />;
      break;
    case "ご登録情報の入力":
      component = <RegisterCustomerInfo />;
      break;
    case "入力確認":
      component = <RegisterCustomerInfo />;
      break;
    case "メール認証":
      component = <EmailAuth />;
      break;
    default:
      break;
  }
  const { titlearea, mainarea } = mystyles();

  return (
    <Box>
      <OpenGuide />
      <Box className={titlearea} component="section" bgcolor="primary.light">
        <Box className={mainarea} component="section" bgcolor="primary.light">
          {component}
        </Box>
      </Box>
    </Box>
  );
};
