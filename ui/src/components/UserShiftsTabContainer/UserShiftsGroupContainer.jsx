import React from "react";
import { makeStyles } from "@material-ui/core";
import DateGroupHeader from "../DateGroupHeader";
import DateGroupItem from "../DateGroupItem";

const useStyles = makeStyles(theme => ({
  groupItemsList: {
    width: "100%",
    display: "block",
    padding: 16
  }
}));

const UserShiftsGroupContainer = props => {
  const { date, booked_shifts } = props.group;
  const classes = useStyles();
  const noOfShifts = booked_shifts.length;
  const totalMins = booked_shifts.reduce(
    (acc, shift) => acc + (shift.endTime - shift.startTime) / (1000 * 60),
    0
  );
  const totalDuration = `${totalMins / 60} h ${totalMins % 60} m`;
  return (
    <>
      <DateGroupHeader
        date={date}
        noOfShifts={noOfShifts}
        totalDuration={totalDuration}
        showSubHeader
      />
      <ul className={classes.groupItemsList}>
        {booked_shifts.map(shift => (
          <DateGroupItem key={shift.id} id={shift.id} />
        ))}
      </ul>
    </>
  );
};

export default UserShiftsGroupContainer;
