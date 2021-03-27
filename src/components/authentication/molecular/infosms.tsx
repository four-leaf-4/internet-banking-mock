import React, { useContext } from "react";
import { Box } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { SmsBtn } from "../atomic/smsbtn";
import { NoticeText } from "../atomic/noticetext";
import IMG from "~/images/auth1.svg";
import { LayoutHomeContext } from "~/components/templates/layoutHomeContext";
import { BiometricContext } from "~/components/biometricauth/biometricContext";

export const InfoSms = () => {
  const { maininner } = mystyles();
  const currentpath = useContext(LayoutHomeContext);
  const context = useContext(BiometricContext);

  console.log(currentpath);
  console.log(context);

  let btn;
  switch (currentpath) {
    case "/home/onetimepassword":
      btn = <></>;
      break;
    case "/home/biometricsauth":
      btn = <></>;
      break;
    default:
      btn = <SmsBtn />;
      break;
  }

  return (
    <Box className={maininner}>
      <img src={IMG} alt="icon" width="120vw" />
      <NoticeText />
      {btn}
    </Box>
  );
};
