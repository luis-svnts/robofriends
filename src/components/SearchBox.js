import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="Search robots..."
        className="pa3 ba b--green bg-lightest-blue "
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
