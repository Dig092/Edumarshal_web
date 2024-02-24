import React, { useState } from "react";
import Select from "react-select";

const WeekSelector = ({ onWeekChange }) => {
  const [value, setValue] = useState(null);
  const options = [
    { value: "1", label: "Week-1" },
    { value: "2", label: "Week-2" },
    { value: "3", label: "Week-3" },
    { value: "4", label: "Week-4" },
    { value: "5", label: "Week-5" }
  ];

  const handleWeekChange = (selectedOption) => {
    setValue(selectedOption);
    if (onWeekChange) {
      onWeekChange(selectedOption?.value); // Pass the selected week value to the callback
    }
  };

  return (
    <div className="bg-[#FBFBFB] my-2 rounded-xl flex justify-between items-center">
      <div className="w-40 h-10">
        <Select
          options={options}
          placeholder="Select Week"
          value={value}
          onChange={handleWeekChange}
          isSearchable
          noOptionsMessage={() => "No Week Available"}
          styles={{
            control: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              borderRadius: "0.75rem",
              border: `2px solid blue`,
            }),
          }}
        />
      </div>
    </div>
  );
};

export default WeekSelector;
