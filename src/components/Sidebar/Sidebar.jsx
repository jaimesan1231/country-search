import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";
import "./Sidebar.css";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`sidebar ${isOpen && "sidebar_opened"}`}>
        <h2 className="sidebar__logo">Logo</h2>
        <ul className="sidebar__list">
          <NavLink
            to="/"
            className="sidebar__item"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/continents"
            className="sidebar__item"
            onClick={() => setIsOpen(false)}
          >
            Continentes
          </NavLink>
          <Link
            to="/"
            className="sidebar__item"
            onClick={() => setIsOpen(false)}
          >
            Paises
          </Link>
        </ul>
        <button className="sidebar__close" onClick={() => setIsOpen(false)}>
          <img src={closeIcon} alt="close sidebar icon" />
        </button>
      </div>

      <button
        className="searchbar__button_right searchbar__button"
        onClick={() => setIsOpen(true)}
      >
        <img src={menuIcon} alt="open sidebar icon" />
      </button>
    </>
  );
};

export default Sidebar;
