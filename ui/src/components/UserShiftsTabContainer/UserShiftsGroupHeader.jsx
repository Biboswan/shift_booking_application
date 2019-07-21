import React from "react";
import Typography from "@material-ui/core/Typography";

const UserShiftsGroupHeader = props => {
  const { date, noOfShifts, totalDuration } = props;
  return (
    <div>
      {date},{noOfShifts} {noOfShifts > 1 ? "shifts" : "shift"},{totalDuration}
    </div>
  );
};

export default UserShiftsGroupHeader;
