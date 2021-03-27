import React from "react";
import Layout from "~/components/templates/layoutindex";
import { Notices } from "../components/notices/style1"; //差分
import { Loginform } from "~/components/loginform/style1";
import { WhatisTrust } from "~/components/whatistrustid/style1";
import { Newregister } from "~/components/newregister/style1";
import { Emergencystop } from "~/components/emergencystop/style1";
import { Infolinkslist } from "../components/infolinkslist/style1"; //差分
import { Box } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const PageHome = ({ location }) => {
  const { responsivebox, maincolumn } = mystyles();
  return (
    <Layout location={location}>
      <Notices />
      <Box className={responsivebox}>
        <Box width="1" className={maincolumn}>
          <Loginform />
          {/* <Newregister /> */}
          <WhatisTrust />
          <Emergencystop />
        </Box>
        <Infolinkslist />
      </Box>
    </Layout>
  );
};

export default PageHome;
