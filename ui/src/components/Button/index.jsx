import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core";
import { ShiftsContext } from "../../Context";
import mapByValue from "../../utils/mapByValue";

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

const BASE_URL = `${process.env.REACT_APP_API_SERVER}/shifts`;

export const Button = props => {
  const { id, type, isDisable } = props;
  const classes = useStyles();
  const [disable, setDisable] = useState(isDisable);
  const { shiftDispatch } = useContext(ShiftsContext);
  //const style = classes.activeCancelButton;
  const onHandleCancel = e => {
    const cancelShift = async () => {
      try {
        const res = await fetch(`${BASE_URL}/${id}/cancel`, {
          method: "POST"
        });
        if (res.ok) {
          const data = await res.json();
          console.log("data");
          console.log(data);
          shiftDispatch({ type: "cancel", payload: mapByValue([data], "id") });
        }
      } catch (err) {
        console.log(err);
      }
    };
    setDisable(true);
    cancelShift();
  };

  const onHandleBook = e => {
    const bookShift = async () => {
      try {
        const res = await fetch(`${BASE_URL}/${id}/book`, {
          method: "POST"
        });
        if (res.ok) {
          const data = await res.json();
          console.log("data");
          console.log(data);
          shiftDispatch({ type: "book", payload: mapByValue([data], "id") });
        }
      } catch (err) {
        console.log(err);
      }
    };
    setDisable(true);
    bookShift();
  };

  return (
    <button
      disable={`${disable}`}
      className={`${classes.root} ${
        disable ? classes.disableCancelButton : classes.activeCancelButtton
      }`}
      onClick={type === "cancel" ? onHandleCancel : onHandleBook}
    >
      {type}
    </button>
  );
};
