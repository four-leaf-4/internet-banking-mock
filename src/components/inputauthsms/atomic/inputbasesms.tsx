import React, { useContext } from "react";
import { navigate } from "gatsby";
import { mystyles } from "~/styles/makestyles";
import InputBase from "@material-ui/core/InputBase";
import { SMSauthContext } from "~/components/smsauth/smsauthContext";
import { LayoutHomeContext } from "~/components/templates/layoutHomeContext";

export const InputBaseSMS = (prop) => {
  console.log(prop);
  const { pinkey } = mystyles();
  const { id } = prop;

  const currentpath = useContext(LayoutHomeContext);
  console.log(currentpath, 11);

  let toPath = "/";
  switch (currentpath) {
    case "/authsms":
      toPath = "/home";
      break;
    case "/home/smsauth":
      toPath = "/home/complete";
      break;
    default:
      toPath = "/home";
      break;
  }

  const hundleInput = (event) => {
    console.log(event.target.value);
    navigate(toPath);
  };

  return (
    <InputBase
      id={`input-sms-${id}`}
      type="number"
      onChange={hundleInput}
      className={pinkey}
    />
  );
};
