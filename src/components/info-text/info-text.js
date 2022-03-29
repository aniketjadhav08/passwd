import React from "react";
import { Divider } from "antd";
import { useTranslation, withTranslation } from "react-i18next";
import "./info-text.css";

function InfoText() {
  const { t } = useTranslation();
  return (
    <>
      {/* <Divider /> */}
      <div className="info-text-root-div">
        <div className="tool-heading">{t("PASSWORD GENERATOR TOOL")}</div>
        <div className="tool-description">
          {t(
            "Generate a secure random password instantly with online password generator"
          )}
        </div>
        <div className="selection-description">
          {t(
            "Use the slider to lengthen your password and select from the options below to strengthen the security"
          )}
        </div>
      </div>
    </>
  );
}

export default withTranslation()(InfoText);
