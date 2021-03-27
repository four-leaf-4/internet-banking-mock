import React, { useContext } from "react";
import { navigate } from "gatsby";
import { Box, Typography, Button, Paper } from "@material-ui/core";
import { LayoutHomeContext } from "~/components/templates/layoutHomeContext";
import { mystyles } from "~/styles/makestyles";

export const FinancialProductsListItem = ({ prop }) => {
  const { productName, description, id } = prop;
  const { currentpath } = useContext(LayoutHomeContext);
  const { bold } = mystyles();
  const toPath = (_event) => {
    switch (currentpath) {
      case "/home/creategeneraldeposit":
        navigate(`/home/applygeneraldeposit/${id}`);
        break;
      case "/home/createtermdeposit":
        navigate(`product/${id}`);
        break;
      default:
        break;
    }
  };
  return (
    <Paper>
      <Box mb={3} p={3}>
        <Typography variant="h6" className={bold}>
          商品名：{productName}
        </Typography>
        <Typography>概要：{description}</Typography>
        <Button variant="contained" color="secondary" onClick={toPath}>
          申込
        </Button>
      </Box>
    </Paper>
  );
};
