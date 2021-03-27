import React from "react";
import { Link as Gatsbylink } from "gatsby";
import { List, Button, Grid } from "@material-ui/core";
import arrayroutertransfer from "./arrayroutertransfer.json";
import arrayroutertermdeposit from "./arrayroutertermdeposit.json";
import arrayroutercustomer from "./arrayroutercustomer.json";
import { mystyles } from "~/styles/makestyles";

export const Routerlinks = ({ prop }) => {
  const { submenu2 } = mystyles();
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
    <Grid key={elm.id} item xs={6}>
      <Button
        variant="outlined"
        fullWidth
        color="inherit"
        className={submenu2}
        component={Gatsbylink}
        to={`/home${elm.to}`}
      >
        {" "}
        {elm.title}
      </Button>
    </Grid>
  ));

  return (
    <List aria-label="main mailbox folders">
      <Grid container>{links}</Grid>
    </List>
  );
};
