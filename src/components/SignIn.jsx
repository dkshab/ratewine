import React, { Component } from "react";
import { signInWithGoogle } from "../firebase";

class SignIn extends Component {
  state = { email: "", password: "" };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2 className="title is-3">Sign In</h2>
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
        <input className="button" type="submit" value="Sign In" />
        &nbsp;
        <button onClick={signInWithGoogle} className="button is-success">
          Sign In With Google
        </button>
      </form>
    );
  }
}

export default SignIn;
