import React, { useEffect, useState } from "react";
import { filterCategories, filterTypes } from "../../../shared/types/constant";
import type { FilterOption } from "../../../shared/types/interfaces";

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  selectedValues: string[];
  onChange: (value: string) => void;
}

interface FilterPanelProps {
  onChangeFilter?: (categories: string[], types: string[]) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  options,
  selectedValues,
  onChange,
}) => {
  return (
    <div className="border border-gray-300 rounded-md p-3 mb-4">
      <h3 className="font-semibold text-sm mb-2 uppercase text-gray-800">
        {title}
      </h3>
      <div className="flex flex-col space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedValues.includes(option.value)}
              onChange={() => onChange(option.value)}
              className="accent-black"
            />
            <span className="text-gray-700 text-sm">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

const FilterPanel: React.FC<FilterPanelProps> = ({
  onChangeFilter,
}: FilterPanelProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleSelection = (
    value: string,
    setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    if (onChangeFilter) {
      onChangeFilter(selectedCategories, selectedTypes);
    }
  }, [selectedCategories, selectedTypes]);

  return (
    <div className="min-w-2/12 bg-white ">
      <h2 className="text-lg font-semibold mb-9">Filters</h2>

      <FilterSection
        title="Categories"
        options={filterCategories}
        selectedValues={selectedCategories}
        onChange={(val) => toggleSelection(val, setSelectedCategories)}
      />

      <FilterSection
        title="Type"
        options={filterTypes}
        selectedValues={selectedTypes}
        onChange={(val) => toggleSelection(val, setSelectedTypes)}
      />
    </div>
  );
};

export default FilterPanel;
