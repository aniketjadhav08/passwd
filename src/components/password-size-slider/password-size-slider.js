import React, { useState, useEffect } from "react";
import { Slider } from "antd";
import "./password-size-slider.css";

function PasswordSizeSlider({
  setPasswordBackground,
  passwordBackground,
  passLen,
  setPassLen,
  setPasswordStrength,
}) {
  useEffect(() => {
    setBackgroundCode(passLen);
    setPasswordStrengthText(passLen);
  }, [passLen]);

  const handleSliderChange = (value) => {
    setPassLen(value);
  };

  const setBackgroundCode = (value) => {
    if (value >= 1 && value <= 6) {
      setPasswordBackground(backgroundMapping["bad"]);
    } else if (value > 6 && value <= 8) {
      setPasswordBackground(backgroundMapping["fair"]);
    } else {
      setPasswordBackground(backgroundMapping["strong"]);
    }
  };

  const setPasswordStrengthText = (value) => {
    if (value >= 1 && value <= 6) {
      setPasswordStrength("Weak password");
    } else if (value > 6 && value <= 8) {
      setPasswordStrength("Fairly strong password");
    } else {
      setPasswordStrength("Strong password");
    }
  };

  const backgroundMapping = {
    bad: "#CD412C",
    fair: "#F47B52",
    strong: "#55A554",
  };
  return (
    <div>
      <div>
        <span className="password-length">Password Length {passLen}</span>
      </div>
      <div className="password-slider-root-div">
        <Slider
          defaultValue={12}
          min={1}
          max={50}
          onChange={handleSliderChange}
          value={passLen}
          trackStyle={{ background: "#0E6476" }}
          handleStyle={{ background: "#0E6476" }}
          tooltipVisible={false}
        />
      </div>
    </div>
  );
}

export default PasswordSizeSlider;
