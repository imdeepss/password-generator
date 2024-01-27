import React from "react";

type SliderProps = {
  length: number;
  setLength: (value: number) => void;
};

const PasswordLengthSlider: React.FC<SliderProps> = ({ length, setLength }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLength(parseInt(event.target.value));
  };

  return (
    <label className="text-sm text-white" htmlFor="PasswordLengthSlider">
      LENGTH:<span className="font-bold">{length}</span>
      <input
        type="range"
        value={length}
        onChange={handleChange}
        className="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none mt-4
        [&::-webkit-slider-thumb]:w-5
        [&::-webkit-slider-thumb]:h-5
        [&::-webkit-slider-thumb]:-mt-1.5
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:bg-green
        [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:transition-all
        [&::-webkit-slider-thumb]:duration-150
        [&::-webkit-slider-thumb]:ease-in-out
        [&::-webkit-slider-thumb]:dark:bg-green-dark

        [&::-moz-range-thumb]:w-5
        [&::-moz-range-thumb]:h-5
        [&::-moz-range-thumb]:appearance-none
        [&::-moz-range-thumb]:bg-green
        [&::-moz-range-thumb]:border-4
        [&::-moz-range-thumb]:border-white
        [&::-moz-range-thumb]:rounded-full
        [&::-moz-range-thumb]:transition-all
        [&::-moz-range-thumb]:duration-150
        [&::-moz-range-thumb]:ease-in-out

        [&::-webkit-slider-runnable-track]:w-full
        [&::-webkit-slider-runnable-track]:h-2
        [&::-webkit-slider-runnable-track]:bg-gray-100
        [&::-webkit-slider-runnable-track]:rounded-full
        [&::-webkit-slider-runnable-track]:dark:bg-green-dark

        [&::-moz-range-track]:w-full
        [&::-moz-range-track]:h-2
        [&::-moz-range-track]:bg-gray-100
        [&::-moz-range-track]:rounded-full"
        min="6"
        max="40"
      />
    </label>
  );
};

export default PasswordLengthSlider;
