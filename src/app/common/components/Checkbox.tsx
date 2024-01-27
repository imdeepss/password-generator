import React from "react";

type CheckboxProps = {
  label: string;
  checked?: boolean;
  onChange: (isChecked: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, checked = false, onChange }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onChange(isChecked);
  };

  return (
    <label
      htmlFor="passwordSetting"
      className="font-medium text-lg text-green-light flex gap-2 items-center"
    >
      <input
        type="checkbox"
        className="relative w-5 h-5 rounded-sm cursor-pointer"
        name="passwordSetting"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
