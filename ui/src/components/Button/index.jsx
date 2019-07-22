import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 25,
    backgroundColor: theme.palette.white,
    width: 100,
    height: 50
  },
  activeCancelButtton: {
    color: theme.text.activeCancelButton,
    borderColor: theme.border.activeCancelButton
  },
  disableCancelButton: {
    color: theme.text.disableCancelButton,
    borderColor: theme.border.disableCancelButton
  },
  activeBookButtton: {
    color: theme.text.activeBookButton,
    borderColor: theme.border.activeBookButton
  },
  disableBookButton: {
    color: theme.text.disableBookButton,
    borderColor: theme.border.disableBookButton
  }
}));

export const Button = props => {
  const { type } = props;
  const classes = useStyles();
  const [disable, setDisable] = useState(false);
  //const style = classes.activeCancelButton;
  return (
    <button
      disable={disable}
      className={`${classes.root} ${
        disable ? classes.disableCancelButton : classes.activeCancelButtton
      }`}
    >
      {type}
    </button>
  );
};
