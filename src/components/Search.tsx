import React from 'react';

interface SearchProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ placeholder = 'Search...', onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-component">
      <input
        type="text"
        className="border rounded p-2"
        placeholder={placeholder}
        onChange={handleInputChange}
        aria-label="Search"
      />
    </div>
  );
};

export default Search;