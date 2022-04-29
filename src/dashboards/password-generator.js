import React, { useState } from "react";

import CheckboxComponents from "../components/checkbox-components/checkbox-components";
import PasswordSizeSlider from "../components/password-size-slider/password-size-slider";
import GeneratedPassword from "../components/generated-password/generated-password";
import ImgNextGen from "../components/img-next-gen/img-next-gen";
import SiteIllustrationJp2 from "../assets/images/siteillustration/siteillustration.jp2";
import SiteIllustrationJxr from "../assets/images/siteillustration/siteillustration.jxr";
import SiteIllustrationPng from "../assets/images/siteillustration/siteillustration.png";
import SiteIllustrationWebp from "../assets/images/siteillustration/siteillustration.webp";
import { useTranslation, withTranslation } from "react-i18next";
import "./password-generator.css";

function PasswordGenerator({
  setPasswordBackground,
  passwordBackground,
  setPasswordStrength,
  passwordStrength,
}) {
  const [passParam, setPassParam] = useState([]);
  const [passLen, setPassLen] = useState(9);
  const [generatedPass, setGeneratedPass] = useState("");

  const { t } = useTranslation();

  return (
    <>
      <div
        className="password-generator-root-div"
        style={{ background: passwordBackground }}
      >
        <div className="checkbox-and-slider">
          <div className="site-illustration">
            <ImgNextGen
              srcWebp={SiteIllustrationWebp}
              srcJrx={SiteIllustrationJxr}
              srcJp2={SiteIllustrationJp2}
              fallback={SiteIllustrationPng}
              alt="site-illustration"
              height={"15%"}
              width={"15%"}
            />
          </div>
          <div className="selection-description">
            {t(
              "Use the slider to lengthen your password and select from the options below to strengthen the security"
            )}
          </div>
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

export default withTranslation()(PasswordGenerator);
