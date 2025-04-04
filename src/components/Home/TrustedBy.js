import React from "react";
// import "./components/TrustedBy.css";

import picassoLogo from "../../assets/picasso.png";
import boosterLogo from "../../assets/booster.png";
import skyCloudLogo from "../../assets/skycloud.jpg";
import talkActionLogo from "../../assets/talk action.png";
import jumpkinsLogo from "../../assets/jumpkins.png";




const TrustedBy = () => {
  return (
    <div className="trusted-by-container">
      <div className="trusted-by-content">
        <h2> Trusted By Organizations and Individuals Across the Community<br></br>
            </h2>
        <p>
        it's providing secure solutions or ensuring seamless service, we deliver beyond expectations.
        </p>
        <div className="trusted-by-logos">
          <img src={picassoLogo} alt="Piccaso" />
          <img src={boosterLogo} alt="Booster" />
          <img src={skyCloudLogo} alt="Sky Cloud" />
          <img src={talkActionLogo} alt="Talk & Action" />
          <img src={jumpkinsLogo} alt="Jumpkins" />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
