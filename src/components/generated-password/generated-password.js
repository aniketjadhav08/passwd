import React from "react";
import { Typography, Button, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import "./generated-password.css";

function GeneratedPassword({ generatedPass, passwordStrength }) {
  const { Paragraph } = Typography;

  const copyFunction = () => {
    const copyText = document.getElementById("generated-pass-id").textContent;
    navigator.clipboard.writeText(copyText);
    message.success("Password copied to clipboard");
  };

  return (
    <div className="generated-password-root-div">
      <div className="generated-password-div">
        <Paragraph className="generated-password">
          <span
            id="generated-pass-id"
            className={generatedPass.length > 0 && "password-text"}
          >
            {generatedPass}
          </span>
          &nbsp;
          {generatedPass.length !== 0 && (
            <Button
              shape="circle"
              size="large"
              icon={<CopyOutlined />}
              onClick={copyFunction}
            />
          )}
        </Paragraph>
        {generatedPass.length > 0 && (
          <Paragraph>
            <span className="password-strength-text">{passwordStrength}</span>
          </Paragraph>
        )}
      </div>
    </div>
  );
}

export default GeneratedPassword;
