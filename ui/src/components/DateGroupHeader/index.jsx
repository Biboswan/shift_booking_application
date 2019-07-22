import React from "react";
import { makeStyles } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: fade(theme.palette.background.default, 0.5),
    width: "100%",
    padding: 16
  },
  mainHeader: {
    color: theme.palette.darkGrayMain,
    fontWeight: "bold"
  },
  subHeader: {
    color: theme.palette.lightGreyMain
  }
}));

const DateGroupHeader = props => {
  const classes = useStyles();
  const { date, noOfShifts, totalDuration, showSubHeader = false } = props;
  return (
    <div className={classes.root}>
      <Typography
        classes={{ root: classes.mainHeader }}
        variant="h6"
        component="h2"
      >
        {date}
        {showSubHeader ? (
          <Typography
            variant="subtitle2"
            component="span"
            className={classes.subHeader}
          >
            {" "}
            {noOfShifts} {noOfShifts > 1 ? "shifts" : "shift"}, {totalDuration}
          </Typography>
        ) : (
          ""
        )}
      </Typography>
    </div>
  );
};

export default DateGroupHeader;
