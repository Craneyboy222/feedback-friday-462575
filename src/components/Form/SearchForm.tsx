import React from 'react';
import { useForm } from 'react-hook-form';
import { TextInput, Button } from '../UI';

interface SearchFormProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => onSearch(data.query))} aria-label="Search Form">
      <TextInput
        label="Search"
        {...register('query')}
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Searching...' : 'Search'}
      </Button>
    </form>
  );
};

export default SearchForm;
