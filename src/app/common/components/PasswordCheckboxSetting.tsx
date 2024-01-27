import Checkbox from "./Checkbox";

const PasswordCheckboxSetting = () => {
  return (
    <div className="flex flex-wrap md:gap-10 gap-4">
      <Checkbox label="Letters (e.g. Aa)" checked />
      <Checkbox label="Digits (e.g. 345)" />
      <Checkbox label="Symbols (@&$!#?)" />
      <Checkbox label="Similar characters (e.g. 0O 1| 2Z)" />
    </div>
  );
};

export default PasswordCheckboxSetting;
