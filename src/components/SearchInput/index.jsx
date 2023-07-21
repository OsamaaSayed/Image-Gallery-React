import React, { useState } from "react";

const SearchInput = ({ searchHandler }) => {
  const [searchValue, setSearchValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    searchHandler(searchValue);
  };

  return (
    <div className="text-center my-8">
      <form onSubmit={submitHandler}>
        <div className="flex justify-center items-center">
          <input
            required
            onChange={(event) => setSearchValue(event.target.value)}
            type="search"
            placeholder="Search Images..."
            className="input input-bordered w-full max-w-xs py-2 focus:outline-none rounded-none h-11"
            value={searchValue}
          />
          <button className="bg-gray-600 text-white p-2 h-11">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
