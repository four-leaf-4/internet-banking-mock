import React from "react";
import { Header } from "~/components/header/logoutstyle";
import { Footer } from "~/components/footer/style1";
import Seo from "~/components/common/seo";
import { mystyles } from "~/styles/makestyles";
import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "~/styles/theme";

export default function Onecolumn({ children }) {
  const { root, wrapper } = mystyles();
  return (
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
  );
}
