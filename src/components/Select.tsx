import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  name: string;
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  ariaLabel: string;
}

const Select: React.FC<SelectProps> = ({ name, options, value, onChange, ariaLabel }) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    aria-label={ariaLabel}
    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;