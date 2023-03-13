import React from "react";
const Search = ({ tarih, changeHandler }) => {
  return (
    <div>
      <input
        value={tarih}
        onChange={(event) => (
          changeHandler(event.target.value), console.log(event.target.value)
        )}
        name="date"
        type="date"
      />
    </div>
  );
};

export default Search;
