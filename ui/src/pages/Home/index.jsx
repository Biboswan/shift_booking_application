import React, { useState, useEffect, useReducer } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core";
import UserShiftsTabContainer from "../../components/UserShiftsTabContainer";
import AvailableShiftsTabContainer from "../../components/AvailableShiftsTabContainer";
import { ShiftsContext } from "../../Context";
import mapByValue from "../../utils/mapByValue";

const USER_SHIFT_TYPE = "user";
const AVAILABLE_SHIFT_TYPE = "available";

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

const shiftReducer = (state, action) => {
  switch (action.type) {
    case "fetchAll":
    case "book":
    case "cancel":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const Home = () => {
  const classes = useStyles();
  const [shifts, shiftDispatch] = useReducer(shiftReducer, {});
  const [shiftTabType, setShiftTabType] = useState(USER_SHIFT_TYPE);
  const [isLoading, setIsLoading] = useState(true);

  const handleTabChange = (e, value) => {
    setShiftTabType(value);
  };

  useEffect(() => {
    const getShifts = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_SERVER}/shifts`);
      const data = await res.json();
      shiftDispatch({ type: "fetchAll", payload: mapByValue(data, "id") });
    };
    console.log("mount");
    setIsLoading(true);
    getShifts();
    setIsLoading(false);
  }, []);

  return (
    <main className={classes.container}>
      <div className={classes.item}>
        <Tabs
          classes={{ root: classes.tabsRoot, indicator: classes.tabIndicator }}
          value={shiftTabType}
          onChange={handleTabChange}
        >
          <Tab
            classes={{ root: classes.tabRoot, selected: classes.activeTab }}
            value={USER_SHIFT_TYPE}
            label="My shifts"
          />
          <Tab
            classes={{ root: classes.tabRoot, selected: classes.activeTab }}
            value={AVAILABLE_SHIFT_TYPE}
            label="Available shifts"
          />
        </Tabs>
        <ShiftsContext.Provider value={{ shifts, shiftDispatch }}>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className={classes.tabContainer}>
              {shiftTabType === USER_SHIFT_TYPE && <UserShiftsTabContainer />}
              {shiftTabType === AVAILABLE_SHIFT_TYPE && (
                <AvailableShiftsTabContainer />
              )}
            </div>
          )}
        </ShiftsContext.Provider>
      </div>
    </main>
  );
};

export default Home;
