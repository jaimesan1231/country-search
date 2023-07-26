import "./Sidebar.css";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";
import { useState } from "react";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={`sidebar ${isOpen && "sidebar_opened"}`}>
        <h2 className="sidebar__logo">Logo</h2>
        <ul className="sidebar__list">
          <li className="sidebar__item">Inicio</li>
          <li className="sidebar__item">Continentes</li>
          <li className="sidebar__item">Paises</li>
        </ul>
        <button className="sidebar__close" onClick={() => setIsOpen(false)}>
          <img src={closeIcon} alt="" />
        </button>
      </div>

      <button
        className="searchbar__button_right searchbar__button"
        onClick={() => setIsOpen(true)}
      >
        <img src={menuIcon} alt="" />
      </button>
    </>
  );
};

export default Sidebar;
