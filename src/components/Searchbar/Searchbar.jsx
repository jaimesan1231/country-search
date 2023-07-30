import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GET_CONTINENTS } from "../../api";
import { useQuery } from "@apollo/client";
import searchIcon from "../../assets/search.svg";
import closeIcon from "../../assets/close.svg";
import FitlerItem from "../FilterItem/FitlerItem";
import "./Searchbar.css";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const { data } = useQuery(GET_CONTINENTS);
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef();
  const filterRef = useRef();
  useEffect(() => {
    setSearchText("");
  }, [location]);
  useEffect(() => {
    if (data) {
      const initialFilter = data.continents.map((item) => item.code);
      setFilter(initialFilter);
    }
  }, [data]);
  useEffect(() => {
    const handleFitlerClick = (e) => {
      if (
        !inputRef.current.contains(e.target) &&
        !filterRef.current.contains(e.target)
      ) {
        setIsFocused(false);
      }
    };
    if (isFocused) {
      document.addEventListener("click", handleFitlerClick);
    }
    return () => {
      document.removeEventListener("click", handleFitlerClick);
    };
  }, [isFocused]);

  const searchCountries = (e) => {
    e.preventDefault();
    const continentsQuery =
      "&" + filter.map((continent) => `continent=${continent}`).join("&");
    navigate(
      `search-results?search=${encodeURIComponent(
        searchText
      )}${continentsQuery}`
    );
  };

  const handleFilter = (continent, action) => {
    if (action === "add") {
      setFilter((prev) => [...prev, continent]);
    } else {
      setFilter((prev) => [...prev.filter((item) => item !== continent)]);
    }
  };
  const cleanFilter = () => {
    setFilter([]);
  };

  return (
    <header className="searchbar__container">
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
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(true)}
          ref={inputRef}
          autoComplete="off"
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
      <div
        ref={filterRef}
        className={`searchbar__filter ${isFocused && "searchbar__filter_open"}`}
      >
        <div className="searchbar__filter-header">
          <h2 className="searchbar__filter-title">Filtrar por continentes</h2>
          <button className="searchbar__filter-clean" onClick={cleanFilter}>
            Limpiar
          </button>
        </div>
        <ul className="searchbar__filter-list">
          {data?.continents.map((continent) => (
            <FitlerItem
              continent={continent}
              key={continent.code}
              handleFilter={handleFilter}
              selected={filter.includes(continent.code)}
            />
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Searchbar;
