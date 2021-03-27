import React from "react";
import { Box } from "@material-ui/core";
import { HeadLine } from "./atomic/headline";
import { SectionForm } from "./molecular/sectionform";
import { LoginBtn } from "./atomic/loginbtn";

export const Loginform = () => {
  return (
    <Box p={2} component="section" bgcolor="primary.light">
      <HeadLine />
      <SectionForm />
      <LoginBtn />
    </Box>
  );
};
