import React from "react";

const UserShiftsGroupItem = props => {
  const { area, startTime, endTime } = props.shift;
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  const startHour = startDate.getHours();
  const endHour = endDate.getHours();
  const startMinNumber = startDate.getMinutes();

  //padding minutes
  const startMin = startMinNumber > 9 ? startMinNumber : `0${startMinNumber}`;
  const endMinNumber = endDate.getMinutes();
  const endMin = endMinNumber > 9 ? endMinNumber : `0${endMinNumber}`;

  const shiftTime = `${startHour}:${startMin}-${endHour}:${endMin}`;
  return (
    <>
      <div>{shiftTime}</div>
      <div>{area}</div>
    </>
  );
};

export default UserShiftsGroupItem;
