import React from "react";
import { Header } from "~/components/header/logoutstyle";
import { Footer } from "~/components/footer/style1";
import Seo from "~/components/common/seo";
import { mystyles } from "~/styles/makestyles";
import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "~/styles/theme";
import { LoginFormContextProvider } from "~/components/loginform/loginformContext";

export default function Layout(props) {
  const { children, location } = props;
  const { root, wrapper } = mystyles();

  return (
    <LoginFormContextProvider location={location}>
      <ThemeProvider theme={theme}>
        <section className={root}>
          <Seo />
          <CssBaseline />
          <Header />
          <Container maxWidth="md" component="section" className={wrapper}>
            {children}
          </Container>
          <Footer />
        </section>
      </ThemeProvider>
    </LoginFormContextProvider>
  );
}
