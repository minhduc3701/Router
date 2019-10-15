import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
          <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
              <li className="active">
                <a>Trang Chủ</a>
              </li>
              <li>
                <a>Liên Hệ</a>
              </li>
            </ul>
          </nav>
          {/* Nội dung */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
