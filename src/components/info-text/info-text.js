import React from "react";
import { Divider } from "antd";
import "./info-text.css";

function InfoText() {
  return (
    <>
      <Divider />
      <div className="info-text-root-div">
        <div className="tool-heading">PASSWORD GENERATOR TOOL</div>
        <div className="tool-description">
          Generate a secure, random password instantly with online password
          generator.
        </div>
        <div className="selection-description">
          Use the slider to lengthen your password and select from the options
          below to strengthen the security
        </div>
      </div>
    </>
  );
}

export default InfoText;
