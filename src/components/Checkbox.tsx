import React from 'react';

interface CheckboxProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, checked, onChange, label }) => (
  <label className="inline-flex items-center">
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      className="form-checkbox h-5 w-5 text-blue-600"
    />
    <span className="ml-2 text-gray-700">{label}</span>
  </label>
);

export default Checkbox;