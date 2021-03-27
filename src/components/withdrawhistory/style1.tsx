import React from "react";
import { Link as gatsbylink } from "gatsby";
import { Box, Typography, Grid, Paper } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export const Withdrawhistory = () => {
  const rows = [
    {
      id: "1",
      title: "出金",
      date: "xxxx/xx/xx",
      place: "ATM",
      price: 10000,
      balance: 1000,
    },
    {
      id: "2",
      title: "入金",
      date: "xxxx/xx/xx",
      place: "ATM",
      price: 10000,
      balance: 1000,
    },
    {
      id: "3",
      title: "入金",
      date: "xxxx/xx/xx",
      place: "ATM",
      price: 10000,
      balance: 1000,
    },
  ];

  return (
    <Box>
      <Grid container justify="space-between">
        <Typography variant="subtitle2" component="h3">
          出入金履歴
        </Typography>
        <Typography
          variant="caption"
          component={gatsbylink}
          to="/home/bankstatement"
          color="textPrimary"
        >
          もっと見る
        </Typography>
      </Grid>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead></TableHead>
          <TableBody>
            {rows.map(({ id, title, date, place, price, balance }) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {title}
                </TableCell>
                <TableCell>
                  <Typography variant="caption" component="p">
                    {date}　{place}
                  </Typography>
                  <Typography variant="caption" component="p">
                    お取引可能残高 {balance}
                  </Typography>
                </TableCell>
                <TableCell align="right">{price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
