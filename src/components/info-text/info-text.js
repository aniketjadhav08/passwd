import React from "react";
import SiteLogo from "../../assets/images/sitelogo.png";
import { useTranslation, withTranslation } from "react-i18next";
import "./info-text.css";

function InfoText({ passwordBackground }) {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="info-text-root-div"
        style={{ background: passwordBackground }}
      >
        <div className="site-logo">
          <img alt="Site-logo" src={SiteLogo} width={"80%"} />
        </div>
        <div className="site-info">
          <div className="tool-heading">{t("PASSWORD GENERATOR TOOL")}</div>
          <div className="tool-description">
            {t(
              "Generate a secure random password instantly with online password generator"
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(InfoText);
