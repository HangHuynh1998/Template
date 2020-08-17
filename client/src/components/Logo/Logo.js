import React from "react";
import  "./Logo.scss";
import LogoImage from "../../assets/images/dev-test-img.svg";
const Logo = (props) => (
  <div className="Logo">
    <img src={LogoImage} />
  </div>
);

export default Logo;