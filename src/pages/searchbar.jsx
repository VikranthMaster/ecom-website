import React, { useEffect } from "react";
import "./SearchBar.css";

export const SearchBar = () => {
  useEffect(() => {
    const searchBar = document.getElementById("search-bar");
    const searchButton = document.getElementById("search-button");

    const toggleSearch = () => {
      searchBar.classList.toggle("show-search");
    };

    searchButton.addEventListener("click", toggleSearch);
    return () => searchButton.removeEventListener("click", toggleSearch);
  }, []);

  return (
    <div className="searchbar-container" id="search-bar">
      <input
        type="search"
        placeholder="Search..."
        name="q"
        className="searchbar-input"
      />
      <div className="searchbar-button" id="search-button">
        <i className="ri-search-2-line searchbar-icon"></i>
        <i className="ri-close-line searchbar-close"></i>
      </div>
    </div>
  );
};
