import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import Reviews from "./Reviews";
import Authentication from "./Authentication";
import UserProfile from "./UserProfile";

class MainApp extends Component {
  render() {
    return (
      <section>
        <div>
          <Link to="/">
            <h1 className="title is-1">Rate Wine</h1>
          </Link>
          <Authentication />
          <hr />
          <Router>
            <Reviews path="/" />
            <UserProfile path="/profile" />
          </Router>
        </div>
      </section>
    );
  }
}

export default MainApp;
