import React, { useState } from "react";
import PasswordGenerator from "./password-generator";
import { FullPage, Slide } from "react-full-page";

function HomeScreen() {
  const [passwordBackground, setPasswordBackground] = useState("#ffffff");
  const [passwordStrength, setPasswordStrength] = useState("Strong");
  return (
    <FullPage>
      <Slide style={{ background: passwordBackground }}>
        <PasswordGenerator
          setPasswordBackground={setPasswordBackground}
          passwordBackground={passwordBackground}
          setPasswordStrength={setPasswordStrength}
          passwordStrength={passwordStrength}
        />
      </Slide>
      <Slide>
        <h1> ele two</h1>
      </Slide>
      <Slide>
        <h1> ele three</h1>
      </Slide>
    </FullPage>
  );
}

export default HomeScreen;
