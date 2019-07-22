import React from "react";
import UserShiftsGroupHeader from "./UserShiftsGroupHeader";
import UserShiftsGroupItem from "./UserShiftsGroupItem";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  groupItemsList: {
    width: "100%",
    display: "block"
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
      <UserShiftsGroupHeader
        date={date}
        noOfShifts={noOfShifts}
        totalDuration={totalDuration}
      />
      <ul className={classes.groupItemsList}>
        {booked_shifts.map(shift => (
          <UserShiftsGroupItem key={shift.id} shift={shift} />
        ))}
      </ul>
    </>
  );
};

export default UserShiftsGroupContainer;
