import React, { useState } from "react";
import { Layout, Select } from "antd";
import PageInfo from "./page-info";
import i18n from "../i18n";
import PasswordGenerator from "./password-generator";
import ApplicationFooter from "../components/application-footer/application-footer";
import "./home-screen.css";

function HomeScreen() {
  const { Header, Footer } = Layout;
  const { Option } = Select;
  const [passwordBackground, setPasswordBackground] = useState("#ffffff");
  const [passwordStrength, setPasswordStrength] = useState("Strong");

  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };
  return (
    <Layout>
      <Header
        style={{
          background: passwordBackground,
          textAlign: "center",
          display: "flex",
        }}
      >
        <div className="logo-space"></div>
        <div className="header-space">
          {/* <h1 className="page-header">
          <div className="page-title">PASSWD</div>
        </h1> */}
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

      <PageInfo passwordBackground={passwordBackground} />

      <PasswordGenerator
        setPasswordBackground={setPasswordBackground}
        passwordBackground={passwordBackground}
        setPasswordStrength={setPasswordStrength}
        passwordStrength={passwordStrength}
      />
      <Footer className="application-footer">
        <ApplicationFooter />
      </Footer>
    </Layout>
  );
}

export default HomeScreen;
