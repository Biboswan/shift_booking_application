import React from "react";
import green_spinner from "../../assets/spinner_green.svg";
import red_spinner from "../../assets/spinner_red.svg";

const Spinner = props => {
  switch (props.color) {
    case "green":
      return <img alt="green spinner" src={green_spinner} />;
    case "red":
      return <img alt="red spinner" src={red_spinner} />;
    default:
      return <img alt="green spinner" src={green_spinner} />;
  }
};

export default Spinner;
