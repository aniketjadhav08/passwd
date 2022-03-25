import React from "react";
import { Typography } from "antd";
import "./generated-password.css";

function GeneratedPassword({ generatedPass, passwordStrength }) {
  const { Paragraph } = Typography;
  return (
    <div className="generated-password-root-div">
      <div className="generated-password-div">
        <Paragraph
          className="generated-password"
          copyable={generatedPass.length !== 0 ? true : false}
        >
          <span className={generatedPass.length > 0 && "password-text"}>
            {generatedPass}
          </span>
        </Paragraph>
        <Paragraph>
          <span className="password-strength-text">{passwordStrength}</span>
        </Paragraph>
      </div>
    </div>
  );
}

export default GeneratedPassword;
