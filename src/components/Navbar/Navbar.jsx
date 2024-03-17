import { useState } from "react";
import { MenuItems } from "../MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [showicon, setShowicon] = useState(true);
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>
      <div className="menu-icons">
        <i
          className={showicon ? "fas fa-bars" : "fas fa-times"}
          onClick={() => setShowicon(!showicon)}
        ></i>
      </div>
      <ul className={showicon ? "nav-menu" : " nav-menu active"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.url} className={item.cName}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}

export default Navbar;
