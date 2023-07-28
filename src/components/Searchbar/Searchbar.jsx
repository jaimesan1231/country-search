import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import searchIcon from "../../assets/search.svg";
import closeIcon from "../../assets/close.svg";
import "./Searchbar.css";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setSearchText("");
  }, [location]);
  const searchCountries = (e) => {
    e.preventDefault();
    if (searchText.trim() === "") return;
    navigate(`search-results?search=${encodeURIComponent(searchText)}`);
  };

  return (
    <header>
      <form className={`searchbar ${isOpen && "searchbar_expanded"}`}>
        <label htmlFor="searchInput" className="searchbar__title">
          Pais
        </label>
        <button className="searchbar__button" onClick={searchCountries}>
          <img src={searchIcon} alt="search icon" />
          <span className="searchbar__button-text">Buscar</span>
        </button>
        <input
          id="searchInput"
          className="searchbar__input"
          type="text"
          placeholder="Escribe el país que deseas ver"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="searchbar__button searchbar__close"
          onClick={() => setIsOpen(false)}
          type="button"
        >
          <img src={closeIcon} alt="close searchbar icon" />
        </button>
      </form>
      <button
        className="searchbar__button_left searchbar__button"
        onClick={() => setIsOpen(true)}
      >
        <img src={searchIcon} alt="open searchbar icon" />
      </button>
    </header>
  );
};

export default Searchbar;
