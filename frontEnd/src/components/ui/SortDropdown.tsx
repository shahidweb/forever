import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface OptionType {
  id: string;
  label: string;
}

interface DropdownProps {
  label?: string;
  options: OptionType[];
  defaultValue?: string; // default selected id
  onSelect?: (option: OptionType) => void;
  width?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label = "",
  options,
  defaultValue,
  onSelect,
  width = "w-2xs",
}) => {
  const defaultOption =
    options.find((opt) => opt.id === defaultValue) || options[0];
  const [selected, setSelected] = useState<OptionType>(defaultOption);
  const [open, setOpen] = useState(false);

  const handleSelect = (option: OptionType) => {
    setSelected(option);
    setOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between ${width} border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 rounded-md hover:border-gray-400 transition-all`}
      >
        <span>
          {label && <span className="font-semibold">{label}: </span>}
          {selected.label}
        </span>
        <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
      </button>

      {open && (
        <div
          className={`absolute right-0 mt-2 ${width} bg-white border border-gray-200 rounded-md shadow-lg z-10`}
        >
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                selected.id === option.id
                  ? "text-black font-semibold"
                  : "text-gray-700"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
