import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const recipes = [
    "pizza",
    "burger",
    "ice cream",
    "spaghetti",
    "lasagne",
    "chocolate cake",
  ];
  return (
    <div className="section previous__searches">
      <h2>Previous Searches</h2>
      <div className="previous__searches--container">
        {recipes.map((search, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search__item"
          >
            {search}
          </div>
        ))}
      </div>
      <div className="search__box">
        <input type="text" placeholder="search" />
        <button className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
