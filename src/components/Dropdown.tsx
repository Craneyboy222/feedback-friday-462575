import React, { useState } from 'react';

interface DropdownProps {
  options: { value: string; label: string }[];
  onSelect: (value: string) => void;
  label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(label);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (value: string, label: string) => {
    setSelectedLabel(label);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selectedLabel}
      </button>

      {isOpen && (
        <div
          className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg"
          role="menu"
          aria-orientation="vertical"
          aria-label="Dropdown Menu"
        >
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value, option.label)}
              className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
              role="menuitem"
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
