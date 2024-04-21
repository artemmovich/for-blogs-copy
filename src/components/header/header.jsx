import { NavLink } from "react-router-dom";
import "./header.css"
import React, { useEffect, useState } from 'react'



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow", isOpen)
  }, [isOpen])

  return (
    <header className="header__wrapper">
      <div className="first__container">
        <div className="burger-menu__wrapper">
          <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}><span></span>
        
          </div>
        </div>


        <nav className={`header ${isOpen ? 'open' : ''}`}>
          <ul className={`header__items ${isOpen ? 'open' : ''}`}>
            <li className="header__item" onClick={closeMenu}>
              <NavLink className={({ isActive }) =>
                isActive ? "active" : ""
              } to="/works">Works</NavLink>
            </li>
            <li className="header__item" onClick={closeMenu}>
              <NavLink className={({ isActive }) =>
                isActive ? "active" : ""
              } to="/blog">Blog</NavLink>
            </li>
            <li className="header__item" onClick={closeMenu}>
              <NavLink className={({ isActive }) =>
                isActive ? "active" : ""
              } to="/">Contact</NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;