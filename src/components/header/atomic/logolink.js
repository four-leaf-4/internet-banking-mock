import React from "react";
import { Link } from "gatsby";
import Logo from "~/images/logo_shimane.png";
import { mystyles } from "~/styles/makestyles";

export const Logolink = () => {
  const { normaltextlink, headerlogo } = mystyles();

  return (
    <Link to="/home" className={normaltextlink}>
      <img src={Logo} alt="logo" className={headerlogo} />
    </Link>
  );
};
