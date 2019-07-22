import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core";
import calcDate from "../../utils/calcDate";
import DateGroupHeader from "../DateGroupHeader";
import DateGroupItem from "../DateGroupItem";
import { ShiftsContext } from "../../Context";

const useStyles = makeStyles(theme => ({
  groupItemsList: {
    width: "100%",
    display: "block",
    padding: 16
  },
  groupContainer: {
    flexWrap: "wrap",
    padding: 0
  }
}));

const AreaGroupContainer = props => {
  const classes = useStyles();
  const { group } = props;
  const { shifts } = useContext(ShiftsContext);
  const groupByDateShifts = () => {
    //grouping sorted dates by dates
    let groupByDateShifts = [],
      prevDate = "",
      ob;
    const len = group.length;
    for (let i = 0; i < len; i++) {
      const { id, prevId, nextId } = group[i];
      const date = calcDate(shifts[id].startTime);
      if (date !== prevDate) {
        ob = { date, shifts: [{ id, prevId }] };
        prevDate = date;
        groupByDateShifts.push(ob);
      } else {
        ob["shifts"].push({ id, prevId, nextId });
      }
    }

    return groupByDateShifts;
  };

  return (
    <List>
      {groupByDateShifts().map(({ date, shifts }) => (
        <ListItem key={date} divider classes={{ root: classes.groupContainer }}>
          <DateGroupHeader date={date} />
          <ul className={classes.groupItemsList}>
            {shifts.map(({ id, prevId, nextId }) => (
              <DateGroupItem
                showBookStatus
                key={id}
                id={id}
                prevId={prevId}
                nextId={nextId}
              />
            ))}
          </ul>
        </ListItem>
      ))}
    </List>
  );
};

export default AreaGroupContainer;
