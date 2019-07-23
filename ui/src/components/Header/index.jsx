import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.darkGrayMain
  }
}));
export default () => {
  const classes = useStyles();
  return (
    <header>
      <Typography className={classes.root} variant="h4" component="h1">
        Shift Booking Application
      </Typography>
    </header>
  );
};
