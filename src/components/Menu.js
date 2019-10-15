import React from "react";
import { Route, Link } from "react-router-dom";

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      children={({ match }) => {
        let active = match ? "active abc" : "";
        return (
          <li className={active}>
            <Link to={to} className="my-link">
              {label}
            </Link>
          </li>
        );
      }}
      path={to}
      exact={activeOnlyWhenExact}
    ></Route>
  );
};

class Menu extends React.Component {
  render() {
    return (
      // Menu
      <nav className="navbar navbar-defautl">
        <ul className="nav navbar-nav">
          <MenuLink
            to="/"
            label="Trang Chủ"
            activeOnlyWhenExact={true}
          ></MenuLink>
          <MenuLink
            to="/about"
            label="Giới Thiệu"
            activeOnlyWhenExact={false}
          ></MenuLink>
          <MenuLink
            to="/contact"
            label="Liên Hệ"
            activeOnlyWhenExact={false}
          ></MenuLink>
        </ul>
      </nav>
    );
  }
}

export default Menu;
