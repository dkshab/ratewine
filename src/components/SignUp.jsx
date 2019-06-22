import React, { Component } from "react";
import { auth } from "../firebase";

class SignUp extends Component {
  state = { displayName: "", email: "", password: "" };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password, displayName } = this.state;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { displayName, email, password } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2 className="title is-3">Sign Up</h2>
          <div className="field">
            <input
              className="input "
              type="text"
              name="displayName"
              placeholder="Display Name"
              value={displayName}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <input className="button is-primary" type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

export default SignUp;
