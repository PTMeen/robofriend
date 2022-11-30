import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="p-4 mb-8">
      <input
        className="px-3 py-2 rounded-full"
        type="search"
        placeholder="Search Robot"
        value={searchField}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
