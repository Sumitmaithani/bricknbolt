import React from "react";
import RightArrow from "../../../images/rightarrow.png";

const Reward = () => {
  return (
    <div className="rewards">
      <div className="reward">
        <div>
          <h4 className="reward-line">Check the reward in this resto</h4>
          <h6 className="reward-number">16 Reward</h6>
        </div>
        <div>
        <img src={RightArrow} />
        </div>
      </div>
    </div>
  );
};

export default Reward;
