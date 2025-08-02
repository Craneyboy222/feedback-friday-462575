import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({ selected, onChange }) => {
  return <DatePicker selected={selected} onChange={onChange} />;
};

export default CustomDatePicker;