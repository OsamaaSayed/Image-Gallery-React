import React from "react";

const SearchInput = () => {
  return (
    <div className="text-center mb-8">
      <form>
        <input
          type="text"
          placeholder="Search for a photo"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default SearchInput;
