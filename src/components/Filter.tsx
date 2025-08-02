import React from 'react';

interface FilterProps {
  options: string[];
  selectedOption: string;
  onFilterChange: (option: string) => void;
}

const Filter: React.FC<FilterProps> = ({ options, selectedOption, onFilterChange }) => {
  return (
    <div className="filter-component">
      <label htmlFor="filter" className="sr-only">Filter</label>
      <select
        id="filter"
        className="border rounded p-2"
        value={selectedOption}
        onChange={(e) => onFilterChange(e.target.value)}
        aria-label="Filter options"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;