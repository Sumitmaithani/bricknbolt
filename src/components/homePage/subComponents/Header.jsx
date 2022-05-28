import React from "react";
import LeftArrow from "../../../images/leftarrow.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="arrow" src={LeftArrow} />
      </div>
      <div className="head">
        <h1 className="heading">Assignment</h1>
      </div>
    </div>
  );
};

export default Header;
