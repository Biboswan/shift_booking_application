import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import calcDate from "../../utils/calcDate";
import { ShiftsContext } from "../../Context";
import UserShiftsGroupContainer from "./UserShiftsGroupContainer";

//TODO: Memoize it so that switching tabs becomes faster
const UserShiftsTabContainer = () => {
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
    return groupByDateShifts;
  };

  return (
    <List>
      {groupByDateShifts(shifts).map(group => (
        <ListItem key={group.date}>
          <UserShiftsGroupContainer group={group} />
        </ListItem>
      ))}
    </List>
  );
};

export default UserShiftsTabContainer;
