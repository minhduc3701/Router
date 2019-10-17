import React from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true
  },
  {
    name: "Giới Thiệu",
    to: "/about",
    exact: false
  },
  {
    name: "Liên Hệ",
    to: "/contact",
    exact: false
  },
  {
    name: "Sản Phẩm",
    to: "/products",
    exact: false
  },
  {
    name: "Đăng Nhập",
    to: "/login",
    exact: false
  }
];

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
  showMenu = menus => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            to={menu.to}
            label={menu.name}
            activeOnlyWhenExact={menu.exact}
          ></MenuLink>
        );
      });
    }
    return result;
  };

  render() {
    return (
      // Menu
      <nav className="navbar navbar-defautl">
        <ul className="nav navbar-nav">{this.showMenu(menus)}</ul>
      </nav>
    );
  }
}

export default Menu;
