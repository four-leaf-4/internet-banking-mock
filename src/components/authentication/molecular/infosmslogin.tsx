import React, { useContext } from "react";
import { Box } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { SmsBtn } from "../atomic/smsbtn";
import { NoticeText } from "../atomic/noticetext";
import IMG from "~/images/auth1.svg";

export const InfoSms = () => {
  const { maininner } = mystyles();
  return (
    <Box className={maininner}>
      <img src={IMG} alt="icon" width="120vw" />
      <NoticeText />
      <SmsBtn />
    </Box>
  );
};
