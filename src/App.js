import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

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

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
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

          {/* Nội dung */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
