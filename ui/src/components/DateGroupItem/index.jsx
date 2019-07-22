import React, { useContext } from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";
import { ShiftsContext } from "../../Context";
import { Button } from "../Button";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  mainHeader: {
    color: theme.palette.darkGrayMain,
    fontWeight: "normal"
  },
  subHeader: {
    color: theme.palette.darkGraySecondary
  },
  bookStatusBooked: {
    color: theme.palette.darkGrayMain
  },
  boldFont: {
    fontWeight: "bold"
  },
  bookStatusOverlap: {
    color: theme.palette.pinkMain
  }
}));

const DateGroupItem = props => {
  const classes = useStyles();
  const { shifts } = useContext(ShiftsContext);
  const { id, prevId, nextId } = props;
  const { area, startTime, endTime, booked } = shifts[id];
  const { showBookStatus = false } = props;
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

  //Checking whether any overlapping shifts exist
  let bookStatus;
  if (showBookStatus && !booked) {
    let prevShift = shifts[prevId];
    if (prevShift && prevShift.booked) {
      let prevEndDate = new Date(prevShift.endTime);
      if (prevEndDate > startDate) {
        bookStatus = "Overlapping";
      }
    }
    if (bookStatus !== "Overlapping") {
      let nextShift = shifts[nextId];
      if (nextShift && nextShift.booked) {
        let nextStartDate = new Date(nextShift.startTime);
        if (endDate > nextStartDate) {
          bookStatus = "Overlapping";
        }
      }
    }
  }

  return (
    <li className={classes.root}>
      <div>
        <div className={classes.mainHeader}>{shiftTime}</div>
        <div className={classes.subHeader}>{area}</div>
      </div>
      <Box display="flex" justifyContent="space-between">
        {showBookStatus ? (
          <div>
            {booked ? (
              <Typography
                className={`${classes.bookStatusBooked} ${classes.boldFont}`}
              >
                Booked
              </Typography>
            ) : (
              bookStatus === "Overlapping" && (
                <Typography
                  className={`${classes.bookStatusOverlap} ${classes.boldFont}`}
                >
                  Overlapping
                </Typography>
              )
            )}
          </div>
        ) : (
          ""
        )}
        <Button isDisable={isDisable} id={id} type="Cancel" />
      </Box>
    </li>
  );
};

export default DateGroupItem;
