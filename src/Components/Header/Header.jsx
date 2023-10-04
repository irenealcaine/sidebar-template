import { useContext } from "react";
import "./Header.scss";
import logo from "../../Assets/Images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { navbarItems } from "../../Utils/Constants";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { DarkModeContext } from "../../Context/darkModeContext";

const Header = () => {
  const location = useLocation();
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const menuActiveClass = isMenuClosed ? "closed" : "";
  const { darkMode, dispatch } = useContext(DarkModeContext);

  const toggleMenu = () => {
    setIsMenuClosed(!isMenuClosed);
  };

  return (
    <nav className={`header ${darkMode ? "dark" : ""} ${menuActiveClass}`}>
      <Link
        to={"/"}
        onClick={() => setIsMenuClosed(true)}
        className="logo-link"
      >
        <img src={logo} alt={"Logo"} className="logo" />
      </Link>

      <div
        className={`menu-toggle ${menuActiveClass} ${darkMode ? "dark" : ""}`}
        onClick={toggleMenu}
      >
        {isMenuClosed ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>

      <ul className={`navigation ${menuActiveClass} ${darkMode ? "dark" : ""}`}>
        {navbarItems.map((navbarItem) => (
          <li key={navbarItem.slug} onClick={() => setIsMenuClosed(true)}>
            <Link
              to={`/${navbarItem.slug}`}
              className={`navigation-item ${
                location.pathname === `/${navbarItem.slug}` && "active"
              }`}
            >
              <AiOutlineClose />
              <p className={`navigation-item-name ${menuActiveClass}`}>
                {navbarItem.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <div className={`color-options ${menuActiveClass}`}>
        <div
          className="color-option"
          onClick={() => dispatch({ type: "LIGHT" })}
        >
          ⚪
        </div>
        <div
          className="color-option"
          onClick={() => dispatch({ type: "DARK" })}
        >
          ⚫
        </div>
        <div
          className="color-option"
          onClick={() => dispatch({ type: "TOGGLE" })}
        >
          {darkMode ? "☀️" : "🌙"}
        </div>
      </div>
    </nav>
  );
};

export default Header;
