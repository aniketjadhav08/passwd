import React from "react";
import SiteLogoPng from "../../assets/images/sitelogo/sitelogo.png";
import SiteLogoJp2 from "../../assets/images/sitelogo/sitelogo.jp2";
import SiteLogoJxr from "../../assets/images/sitelogo/sitelogo.jxr";
import SiteLogoWebp from "../../assets/images/sitelogo/sitelogo.webp";
import ImgNextGen from "../img-next-gen/img-next-gen";
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
          <ImgNextGen
            srcWebp={SiteLogoWebp}
            srcJrx={SiteLogoJxr}
            srcJp2={SiteLogoJp2}
            fallback={SiteLogoPng}
            alt="site-logo"
            width={"80%"}
          />
        </div>
        <div className="site-info">
          <div>
            <h1 className="tool-heading">{t("PASSWORD GENERATOR TOOL")}</h1>
          </div>
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
