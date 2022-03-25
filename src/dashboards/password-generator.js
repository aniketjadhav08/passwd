import React, { useState } from "react";
import { Layout } from "antd";
import CheckboxComponents from "../components/checkbox-components/checkbox-components";
import PasswordSizeSlider from "../components/password-size-slider/password-size-slider";
import GeneratedPassword from "../components/generated-password/generated-password";
import InfoText from "../components/info-text/info-text";
import "./password-generator.css";

function PasswordGenerator({
  setPasswordBackground,
  passwordBackground,
  setPasswordStrength,
  passwordStrength,
}) {
  const { Header } = Layout;
  const [passParam, setPassParam] = useState([]);
  const [passLen, setPassLen] = useState(9);
  const [generatedPass, setGeneratedPass] = useState("");
  return (
    <>
      <Header style={{ background: passwordBackground, textAlign: "center" }}>
        <h1 className="page-header">PASSWD</h1>
      </Header>
      <div className="password-generator-root-div">
        <InfoText />
        <div className="checkbox-and-slider">
          <CheckboxComponents
            setPassParam={setPassParam}
            passParam={passParam}
            passLen={passLen}
            setGeneratedPass={setGeneratedPass}
          />
          <PasswordSizeSlider
            setPasswordBackground={setPasswordBackground}
            passwordBackground={passwordBackground}
            passLen={passLen}
            setPassLen={setPassLen}
            setPasswordStrength={setPasswordStrength}
          />
        </div>
        <GeneratedPassword
          generatedPass={generatedPass}
          passwordStrength={passwordStrength}
        />
      </div>
    </>
  );
}

export default PasswordGenerator;
