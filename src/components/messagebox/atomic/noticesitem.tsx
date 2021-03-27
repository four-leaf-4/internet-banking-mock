import React from "react";
import { Link as Gatsbylink } from "gatsby";
import { ListItem, Link, Grid, Box } from "@material-ui/core";
import { NoticesItemPart } from "./noticesitempart";
import { mystyles } from "~/styles/makestyles";

export const NoticesItem = ({ prop }) => {
  const { date, time, title, href } = prop;
  const { noticesitem } = mystyles();

  return (
    <ListItem>
      <Link
        color="textPrimary"
        component={Gatsbylink}
        to={`/home/messagedetail/${href}`}
        className={noticesitem}
      >
        <Grid container>
          <Grid item container spacing={1} xs={12} sm={3}>
            <Grid item>
              <NoticesItemPart prop={date} />
            </Grid>
            <Grid item>
              <NoticesItemPart prop={time} />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={9}>
            <NoticesItemPart prop={title} />
          </Grid>
        </Grid>
      </Link>
    </ListItem>
  );
};
