import React, { useState, useContext } from "react";
import AreaGroupContainer from "./AreaGroupContainer";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles, Typography } from "@material-ui/core";
import { ShiftsContext } from "../../Context";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw"
  },
  activeTab: {
    color: theme.text.activeTabColor
  },
  tabsRoot: {
    color: theme.text.inactiveTabColor
  },
  tabsFlexContainer: {
    justifyContent: "space-evenly"
  },
  tabRoot: {
    textTransform: "capitalize"
  },
  tabIndicator: {
    backgroundColor: "transparent"
  },
  item: {
    width: "100vw",
    maxWidth: 525
  },
  tabContainer: {
    backgroundColor: theme.palette.white,
    minHeight: "75vh",
    borderRadius: 10,
    boxShadow: `0px 0px 10px 2px ${theme.palette.lightGreyMain}`
  }
}));

const AREAS = ["Helsinki", "Tampere", "Turku"];

const groupByArea = shifts => {
  const shiftsArr = Object.values(shifts);
  const now = new Date().getTime();
  const shiftsArrSorted = shiftsArr
    .filter(shift => shift.endTime > now)
    .sort((a, b) => {
      if (a.startTime < b.startTime) return -1;
      if (a.startTime > b.startTime) return 1;
      if (a.endTime < b.endTime) return -1;
      return 1;
    });

  const len = shiftsArrSorted.length;
  const areaGroup = { Helsinki: [], Tampere: [], Turku: [] };
  for (let i = 0; i < len; i++) {
    let shift = shiftsArrSorted[i];
    areaGroup[shift.area].push({ id: shift.id });
  }
  return areaGroup;
};

export default () => {
  const classes = useStyles();
  const { shifts } = useContext(ShiftsContext);
  const [areaTabType, setAreaTabType] = useState(AREAS[0]);
  const [areaGroup] = useState(groupByArea(shifts));

  const handleTabChange = (e, value) => {
    setAreaTabType(value);
  };

  return (
    <>
      <Tabs
        classes={{
          root: classes.tabsRoot,
          indicator: classes.tabIndicator,
          flexContainer: classes.tabsFlexContainer
        }}
        value={areaTabType}
        onChange={handleTabChange}
      >
        {AREAS.map(area => (
          <Tab
            key={area}
            label={
              <Typography>{`${area} (${areaGroup[area].length})`}</Typography>
            }
            classes={{ root: classes.tabRoot, selected: classes.activeTab }}
            value={area}
          />
        ))}
      </Tabs>
      {AREAS.map(
        area =>
          areaTabType === area && (
            <AreaGroupContainer key={area} group={areaGroup[area]} />
          )
      )}
    </>
  );
};
