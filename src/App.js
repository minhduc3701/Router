import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
          <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink activeClassName="active" exact to="/">
                  Trang Chủ
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/about">
                  Giới Thiệu
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/contact">
                  Liên Hệ
                </NavLink>
              </li>
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
