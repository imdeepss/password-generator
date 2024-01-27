import React, { useEffect, useState } from "react";
import { ReloadIcon } from "../icons";
import PasswordLengthSlider from "./PasswordLengthSlider";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";
import Checkbox from "./Checkbox";

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [bgColor, setBgColor] = useState("bg-fair");
  const [checkboxes, setCheckboxes] = useState([
    { label: "Letters (e.g. Aa)", checked: true },
    { label: "Digits (e.g. 345)", checked: false },
    { label: "Symbols (@&$!#?)", checked: false },
    { label: "Similar characters (e.g. 0O 1| 2Z)", checked: false },
  ]);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const toggleCheckbox = (index: number) => {
    if (index === 0) return;
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox, i) =>
        i === index ? { ...checkbox, checked: !checkbox.checked } : checkbox
      )
    );
  };

  const generatePassword = () => {
    const selectedCharacters = checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => {
        if (checkbox.label.startsWith("Letters")) {
          return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        } else if (checkbox.label.startsWith("Digits")) {
          return "0123456789";
        } else if (checkbox.label.startsWith("Symbols")) {
          return "!@#$%^&*()_+-=[]{}|;:',.<>?";
        } else if (checkbox.label.startsWith("Similar characters")) {
          return "0O1Il|";
        }
        return "";
      })
      .join("");

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      generatedPassword +=
        selectedCharacters[
          Math.floor(Math.random() * selectedCharacters.length)
        ];
    }

    if (generatedPassword.length < 8) {
      setBgColor("bg-weak");
    } else if (generatedPassword.length < 12) {
      setBgColor("bg-fair");
    } else {
      setBgColor("bg-green-dark");
    }

    setGeneratedPassword(generatedPassword);
  };

  useEffect(() => {
    generatePassword();
  }, [passwordLength, checkboxes]);

  const evaluatePasswordStrength = (password: string): string => {
    if (password.length < 8) {
      return "Weak";
    } else if (password.length < 12) {
      return "Fair";
    } else {
      return "Strong";
    }
  };

  const passwordStrength = evaluatePasswordStrength(generatedPassword);

  return (
    <main
      className={`min-h-screen w-full p-5 md:p-10 flex justify-center items-center ${bgColor}`}
    >
      <section className="px-0 md:px-10 text-left w-full h-full md:grid flex flex-col gap-10">
        <h1 className="text-3xl text-green-light font-bold">
          Generate passwords with our random password generator.
        </h1>
        <div className="border-b-4 border-white w-full text-3xl text-green-light relative flex justify-between items-center gap-2">
          <p className="font-medium overflow-auto break-words">{generatedPassword}</p>
          <button
            type="button"
            className=""
            onClick={generatePassword}
          >
            <ReloadIcon />
          </button>
        </div>
        <PasswordStrengthIndicator
          strength={passwordStrength}
          password={generatedPassword}
        />
        <PasswordLengthSlider
          length={passwordLength}
          setLength={setPasswordLength}
        />
        <div className="flex flex-wrap md:gap-10 gap-4">
          {checkboxes.map(({ label, checked }, index) => (
            <Checkbox
              key={index}
              label={label}
              checked={checked}
              onChange={() => toggleCheckbox(index)}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default PasswordGenerator;
