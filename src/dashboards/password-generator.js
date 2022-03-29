import React, { useState } from "react";
import { Layout, Select } from "antd";
import CheckboxComponents from "../components/checkbox-components/checkbox-components";
import PasswordSizeSlider from "../components/password-size-slider/password-size-slider";
import GeneratedPassword from "../components/generated-password/generated-password";
import InfoText from "../components/info-text/info-text";
import i18n from "../i18n";
import "./password-generator.css";

function PasswordGenerator({
  setPasswordBackground,
  passwordBackground,
  setPasswordStrength,
  passwordStrength,
}) {
  const { Header } = Layout;
  const { Option } = Select;
  const [passParam, setPassParam] = useState([]);
  const [passLen, setPassLen] = useState(9);
  const [generatedPass, setGeneratedPass] = useState("");
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };
  return (
    <>
      <Header
        style={{
          background: passwordBackground,
          textAlign: "center",
          display: "flex",
        }}
      >
        <div className="logo-space">logo</div>
        <div className="header-space">
          <h1 className="page-header">
            <div className="page-title">PASSWD</div>
          </h1>
        </div>
        <div className="options-space">
          <Select
            onChange={handleLanguageChange}
            value={language}
            className="language-selector"
          >
            <Option value="en">English</Option>
            <Option value="rus">Russian</Option>
            <Option value="es">Spanish</Option>
          </Select>
        </div>
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
