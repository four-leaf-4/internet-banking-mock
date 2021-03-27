import React from "react";
import Layout from "~/components/templates/layout";
import { AccountOpening } from "~/components/accountopening/style1";
import { AccountOpeningContextProvider } from "~/components/accountopening/accountopeningContext";
import { EmailAuthContextProvider } from "~/components/emailauthcodeinput/emailauthContext";

export default function PageAccountOpening() {
  return (
    <EmailAuthContextProvider>
      <AccountOpeningContextProvider>
        <Layout>
          <AccountOpening />
        </Layout>
      </AccountOpeningContextProvider>
    </EmailAuthContextProvider>
  );
}
