import React from "react";

import InfoText from "../components/info-text/info-text";
import "./page-info.css";

function PageInfo({ passwordBackground }) {
  return (
    <div className="page-info-root-div">
      <InfoText passwordBackground={passwordBackground} />
    </div>
  );
}

export default PageInfo;
