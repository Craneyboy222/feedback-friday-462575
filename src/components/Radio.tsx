import React from 'react';

interface RadioProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Radio: React.FC<RadioProps> = ({ name, value, checked, onChange, label }) => (
  <label className="inline-flex items-center">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="form-radio h-5 w-5 text-blue-600"
    />
    <span className="ml-2 text-gray-700">{label}</span>
  </label>
);

export default Radio;