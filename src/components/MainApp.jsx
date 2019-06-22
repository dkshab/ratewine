import React, { Component } from "react";
import Reviews from "./Reviews";
import Authentication from "./Authentication";

class MainApp extends Component {
  render() {
    return (
      <section>
        <div>
          <h1 className="title is-1">Rate Wine</h1>
          <Authentication />
          <hr />
          <Reviews />
        </div>
      </section>
    );
  }
}

export default MainApp;
