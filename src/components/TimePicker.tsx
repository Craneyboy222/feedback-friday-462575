import React from 'react';
import TimePicker from 'react-time-picker';

interface TimePickerProps {
  value: string;
  onChange: (value: string) => void;
}

const CustomTimePicker: React.FC<TimePickerProps> = ({ value, onChange }) => {
  return <TimePicker onChange={onChange} value={value} />;
};

export default CustomTimePicker;