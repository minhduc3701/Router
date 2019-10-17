import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: ""
    };
  }

  onChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  onLogin = event => {
    event.preventDefault();
    let { txtPassword, txtUsername } = this.state;
    if (txtPassword === "admin" && txtUsername === "admin") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: txtUsername,
          password: txtPassword
        })
      );
    }
  };

  render() {
    let { txtPassword, txtUsername } = this.state;
    let loggedInUser = localStorage.getItem("user");
    if (loggedInUser !== null) {
      let { location } = this.props;
      return (
        <Redirect
          to={{
            pathname: "/products",
            state: {
              from: location
            }
          }}
        />
      );
    }

    return (
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={this.onLogin}>
            <legend>Đăng Nhập</legend>

            <div className="form-group">
              <label>Username: </label>
              <input
                name="txtUsername"
                type="text"
                className="form-control"
                placeholder="Username"
                onChange={this.onChange}
                value={txtUsername}
              ></input>
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input
                name="txtPassword"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={this.onChange}
                value={txtPassword}
              ></input>
            </div>

            <button type="submit" className="btn btn-primary">
              Đăng Nhập
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
