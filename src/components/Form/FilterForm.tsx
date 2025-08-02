import React from 'react';
import { useForm } from 'react-hook-form';
import { Select, Button } from '../UI';

interface FilterFormProps {
  onFilter: (filters: { category: string; dateRange: string }) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ onFilter }) => {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  return (
    <form onSubmit={handleSubmit(onFilter)} aria-label="Filter Form">
      <Select
        label="Category"
        {...register('category')}
      >
        <option value="">Select Category</option>
        <option value="Feedback">Feedback</option>
        <option value="Survey">Survey</option>
      </Select>
      <Select
        label="Date Range"
        {...register('dateRange')}
      >
        <option value="">Select Date Range</option>
        <option value="Last 7 days">Last 7 days</option>
        <option value="Last 30 days">Last 30 days</option>
      </Select>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Filtering...' : 'Filter'}
      </Button>
    </form>
  );
};

export default FilterForm;
