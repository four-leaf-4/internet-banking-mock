import React from "react";
import { Link as Gatsbylink } from "gatsby";
import { Box, List, ListItem, Button, Typography } from "@material-ui/core";
import arrayroutertransfer from "./arrayroutertransfer.json";
import arrayroutertermdeposit from "./arrayroutertermdeposit.json";
import arrayroutercustomer from "./arrayroutercustomer.json";
import { mystyles } from "~/styles/makestyles";

export const Routerlinks = ({ prop }) => {
  const { submenu } = mystyles();
  const value = prop;

  let array = [];
  switch (value) {
    case "TRANSFER":
      array = arrayroutertransfer;
      break;
    case "TERMDEPOSIT":
      array = arrayroutertermdeposit;
      break;
    case "CUSTOMERINFO":
      array = arrayroutercustomer;
      break;
    default:
      break;
  }

  const links = array.map((elm) => (
    <ListItem key={elm.id}>
      <Button
        variant="outlined"
        fullWidth
        color="inherit"
        className={submenu}
        component={Gatsbylink}
        to={`/home${elm.to}`}
      >
        {" "}
        {elm.title}
      </Button>
    </ListItem>
  ));

  return (
    <Box>
      <List aria-label="main mailbox folders">{links}</List>
    </Box>
  );
};
