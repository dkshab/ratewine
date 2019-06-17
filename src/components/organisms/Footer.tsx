import React, { FunctionComponent } from "react";

const Footer: FunctionComponent = () => (
  <footer className="footer">
    <div className="container has-text-centered">
      <small className="has-text-grey">
        <span>Copyright © 2019 wineHunt.io </span>
        <br />
        <span>
          Developed by{" "}
          <a href="http://localhost:3000/signup">Dumisani Shabangu</a>
        </span>
        <br />
        <span>
          Questions?{" "}
          <a href="http://localhost:3000/signup">Support and Consulting</a>
        </span>
      </small>
    </div>
  </footer>
);

export default Footer;
