import React from "react";
import classes from "./Logo.scss";
import Logo from "../../assets/images/dev-test-img.svg";
const Logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={Logo} />
  </div>
);

export default Logo;