import React from 'react';

interface SortProps {
  options: string[];
  selectedOption: string;
  onSortChange: (option: string) => void;
}

const Sort: React.FC<SortProps> = ({ options, selectedOption, onSortChange }) => {
  return (
    <div className="sort-component">
      <label htmlFor="sort" className="sr-only">Sort</label>
      <select
        id="sort"
        className="border rounded p-2"
        value={selectedOption}
        onChange={(e) => onSortChange(e.target.value)}
        aria-label="Sort options"
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

export default Sort;