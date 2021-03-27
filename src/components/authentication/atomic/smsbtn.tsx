import React, { useContext } from "react";
import { Link } from "@material-ui/core";
import { Link as gatsbylink } from "gatsby";
import { BiometricContext } from "~/components/biometricauth/biometricContext";

export const SmsBtn = () => {
  const path = useContext(BiometricContext);
  console.log(path.currentpath);
  const currentpath = path.currentpath;

  let toPath;
  switch (currentpath) {
    case "/home/deviceauth":
      toPath = "/home/smsauth";
      break;
    default:
      toPath = "/authsms";
      break;
  }

  return (
    <Link
      component={gatsbylink}
      state={{ prevPath: "/" }}
      to={toPath}
      color="textPrimary"
    >
      SMSでログイン
    </Link>
  );
};
