import React, { FunctionComponent } from "react";
import { Router, Link, RouteComponentProps } from "@reach/router";

import NavBar from "../NavBar";
import Home from "../organisms/Home";
import About from "../organisms/About";
import Contact from "../organisms/Contact";
import Footer from "../organisms/Footer";

const UnAuthApp: FunctionComponent = () => {
  return (
    <div>
      <NavBar />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <Router>
                <Home path="/" />
                <About path="/about" />
                <Contact path="/contact" />
              </Router>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UnAuthApp;
