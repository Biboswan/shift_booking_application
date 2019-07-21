import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import UserShiftsGroupHeader from "./UserShiftsGroupHeader";
import UserShiftsGroupItem from "./UserShiftsGroupItem";

const UserShiftsGroupContainer = props => {
  const { date, booked_shifts } = props.group;
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

      {booked_shifts.map(shift => (
        <UserShiftsGroupItem key={shift.id} shift={shift} />
      ))}
    </>
  );
};

export default UserShiftsGroupContainer;
