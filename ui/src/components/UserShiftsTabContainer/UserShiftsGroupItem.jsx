import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "../Button";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: 16,
    display: "flex",
    justifyContent: "space-between"
  },
  mainHeader: {
    color: theme.palette.darkGrayMain,
    fontWeight: "normal"
  },
  subHeader: {
    color: theme.palette.darkGraySecondary
  }
}));

const UserShiftsGroupItem = props => {
  const classes = useStyles();
  const { id, area, startTime, endTime } = props.shift;
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  const startHour = startDate.getHours();
  const endHour = endDate.getHours();
  const startMinNumber = startDate.getMinutes();

  //padding minutes
  const startMin = startMinNumber > 9 ? startMinNumber : `0${startMinNumber}`;
  const endMinNumber = endDate.getMinutes();
  const endMin = endMinNumber > 9 ? endMinNumber : `0${endMinNumber}`;

  const shiftTime = `${startHour}:${startMin} - ${endHour}:${endMin}`;

  //checking whether shift has already started
  let isDisable = false;
  if (new Date() > startDate) {
    isDisable = true;
  }

  return (
    <li className={classes.root}>
      <div>
        <div className={classes.mainHeader}>{shiftTime}</div>
        <div className={classes.subHeader}>{area}</div>
      </div>
      <Button isDisable={isDisable} id={id} type="Cancel" />
    </li>
  );
};

export default UserShiftsGroupItem;
