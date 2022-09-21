import React from 'react'

function SearchBar({ value, setValue, onSearch }) {

    const handleSubmit = (event) => {
        event.preventDefault();

    };

  return (
    <div>
        <h2> Suggested Meals For You...</h2>
       <form onSubmit={handleSubmit} className="searchbar__form">
        <input
          className="searchbar__input"
          name="search"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Search for your favorite meals"
        ></input>
        <button className="searchbar__btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;