import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core";
import calcDate from "../../utils/calcDate";
import { ShiftsContext } from "../../Context";
import UserShiftsGroupContainer from "./UserShiftsGroupContainer";

const useStyles = makeStyles(theme => ({
  groupContainer: {
    flexWrap: "wrap",
    padding: 0
  }
}));

//TODO: Memoize it so that switching tabs becomes faster
const UserShiftsTabContainer = () => {
  const classes = useStyles();
  const { shifts } = useContext(ShiftsContext);

  // sorting booked shifts in ascending order of start time and group by date
  const groupByDateShifts = shifts => {
    let userShifts = Object.values(shifts)
      .filter(shift => shift.booked)
      .sort((a, b) => (a.startTime < b.startTime ? -1 : 1));
    let prevDate = "",
      ob;
    let groupByDateShifts = [];
    const len = userShifts.length;
    for (let i = 0; i < len; i++) {
      const shift = userShifts[i];
      const date = calcDate(shift.startTime);
      if (date !== prevDate) {
        ob = { date, booked_shifts: [shift] };
        prevDate = date;
        groupByDateShifts.push(ob);
      } else {
        ob["booked_shifts"].push(shift);
      }
    }
    console.log("lau");
    console.log(groupByDateShifts);
    return groupByDateShifts;
  };

  return (
    <List disablePadding>
      {groupByDateShifts(shifts).map(group => (
        <ListItem
          divider
          classes={{ root: classes.groupContainer }}
          key={group.date}
        >
          <UserShiftsGroupContainer group={group} />
        </ListItem>
      ))}
    </List>
  );
};

export default UserShiftsTabContainer;
