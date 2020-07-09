import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav(props) {
  const location = useLocation();
  console.log(location);

  function activeRoute(path) {
    return location.pathname === path ? "active" : null;
  }

  return (
    <header className="component-nav">
      <ul>
        <li>
          <Link to="/" className={activeRoute("/")}>
            todo
          </Link>
        </li>
        <p>|</p>
        <li>
          <Link to="/done" className={activeRoute("/done")}>
            done
          </Link>
        </li>
        <p>|</p>
        <li>
          <Link to="/add" className={activeRoute("/add")}>
            add
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
