import React from "react";
import { Prompt } from "react-router-dom";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  onChecked = checked => {
    this.setState({
      isChecked: checked
    });
  };

  render() {
    return (
      <div>
        Đây là trang Contact <br />
        <button
          onClick={() => this.onChecked(false)}
          type="button"
          className="btn btn-info"
        >
          Cho Phép
        </button>
        <br />
        <button
          onClick={() => this.onChecked(true)}
          type="button"
          className="btn btn-danger"
        >
          Không Cho Phép
        </button>
        <Prompt
          when={this.state.isChecked}
          message={location => `Bạn chắc chắn muốn đi đến ${location.pathname}`} //trang b chuan bi di toi
        ></Prompt>
      </div>
    );
  }
}

export default Contact;
