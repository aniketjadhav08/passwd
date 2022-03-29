import React, { useEffect } from "react";
import { Checkbox } from "antd";
import { generatePasswordUtility } from "../../utils/index";
import { useTranslation, withTranslation } from "react-i18next";
import "./checkbox-components.css";

function CheckboxComponents({
  setPassParam,
  passParam,
  passLen,
  setGeneratedPass,
}) {
  const { t } = useTranslation();

  useEffect(() => {
    generateRandomPassword();
  }, [passParam, passLen]);

  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
    setPassParam(checkedValues);
  }
  const plainOptions = [
    { label: t("Lowercase Characters"), value: "LC" },
    { label: t("Uppercase Characters"), value: "UC" },
    { label: t("Symbols"), value: "S" },
    { label: t("Numbers"), value: "N" },
  ];

  const generateRandomPassword = () => {
    setGeneratedPass(generatePasswordUtility(passParam, passLen));
  };
  return (
    <div>
      <Checkbox.Group
        className="password-params"
        options={plainOptions}
        onChange={onChange}
      />
    </div>
  );
}

export default withTranslation()(CheckboxComponents);
