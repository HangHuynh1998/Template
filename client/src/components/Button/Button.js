import React from "react";
import classes from "./Button.scss";

const Button = (props) => (
  <button
    className={classes.Button} //classes.Button Dangerous
    onClick={props.clicked}
  >
  </button>
);
export default Button;