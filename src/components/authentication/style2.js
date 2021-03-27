import React from "react";
import { navigate } from "gatsby";
import { Box, Typography, Button } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import IMG from "~/images/auth2.svg";

export const Authentication = () => {
  const { mainarea, maininner } = mystyles();
  const snslogin = (_event) => {
    navigate("/authsms");
  };
  const text =
    "ご登録端末に通知を発信いたしました。\nご本人確認のためにご登録端末で認証を完了させてください。";

  return (
    <Box className={mainarea} component="section" align="conter">
      <Typography component="h3" variant="subtitle2">
        生体認証
      </Typography>
      <Box className={maininner}>
        <img src={IMG} alt="icon" width="120vw" />
        <Box my={6}>
          {text.split("\n").map((t, i) => {
            return (
              <Typography align="left" component="p" variant="body2" key={i}>
                {t}
              </Typography>
            );
          })}
        </Box>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={snslogin}
        >
          SMSでログイン
        </Button>
      </Box>
    </Box>
  );
};
