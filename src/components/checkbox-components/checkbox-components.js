import React, { useEffect } from "react";
import { Checkbox } from "antd";
import { generatePasswordUtility } from "../../utils/index";
import GeneratedPassword from "../generated-password/generated-password";
import "./checkbox-components.css";

function CheckboxComponents({
  setPassParam,
  passParam,
  passLen,
  setGeneratedPass,
}) {
  useEffect(() => {
    generateRandomPassword();
  }, [passParam, passLen]);

  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
    setPassParam(checkedValues);
  }
  const plainOptions = [
    { label: "Lowercase Characters", value: "LC" },
    { label: "Uppercase Characters", value: "UC" },
    { label: "Symbols", value: "S" },
    { label: "Numbers", value: "N" },
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

export default CheckboxComponents;
