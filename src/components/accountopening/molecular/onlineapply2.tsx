import React, { useContext } from "react";
import { Typography, Box, Button, Paper } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";
import { IdentityVerificationDocuments } from "./identityverificationdocuments";
import { mystyles } from "~/styles/makestyles";
import IMG from "~/images/photo.svg";

export const OnlineApply = () => {
  const { nextStep } = useContext(AccountOpeningContext);
  const { subtitle } = mystyles();

  return (
    <Box textAlign="center">
      <Typography className={subtitle} component="h5">
        オンライン申込
      </Typography>
      <Box component={Paper} p={2}>
        <Typography>
          セルフィー動画提出（本人確認書類1種類と本人画像か動画）
        </Typography>
        <Box my={2}>
          <img src={IMG} alt="本人確認" width="120vw" />
        </Box>
        <IdentityVerificationDocuments prop={"online"} />
        <Button variant="contained" color="secondary" onClick={nextStep}>
          online申込
        </Button>
      </Box>
    </Box>
  );
};
