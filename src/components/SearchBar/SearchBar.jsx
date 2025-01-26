import { useState } from "react";
import "./SearchBar.css";
import PropTypes from "prop-types";
import { IoSearch } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      toast.error("Please enter a search images and photos query!");
      return;
    }
    onSubmit(input);
    setInput("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className="search-form">
        <button type="submit" className="search-icon-button">
          <IoSearch className="search-icon" />
        </button>
        <input
          type="text"
          placeholder="Search images and photos"
          value={input}
          className="search-input"
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;