import React, { useState } from "react";
import { WeakPassword } from "../icons";

type PasswordStrengthIndicatorProps = {
  strength: string;
  password: string;
};

const PasswordStrengthIndicator = ({
  strength,
  password,
}: PasswordStrengthIndicatorProps) => {
  const [btnText, setBtnText] = useState("Copy password");
  const [isCopying, setIsCopying] = useState(false);

  const copyPassword = (password: string) => {
    setIsCopying(true);
    navigator.clipboard
      .writeText(password)
      .then(() => {
        console.log("Password copied to clipboard!");
        setBtnText("Copied!");
        setTimeout(() => {
          setBtnText("Copy password");
          setIsCopying(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy password: ", error);
        setIsCopying(false);
      });
  };

  return (
    <div className="text-base md:text-lg font-medium flex justify-between items-center">
      <span className="text-green-light flex items-center gap-1">
        <WeakPassword /> {strength} password
      </span>
      <button
        type="button"
        className={`text-black bg-white rounded-lg px-4 py-2 ${
          isCopying ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={() => copyPassword(password)}
        disabled={isCopying}
      >
        {btnText}
      </button>
    </div>
  );
};

export default PasswordStrengthIndicator;
