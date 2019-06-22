import React from "react";

import moment from "moment";
import { signOut } from "../firebase";
import { Link } from "@reach/router";

const CurrentUser = ({ displayName, photoURL, email, createdAt, children }) => {
  return (
    <div className="section">
      <div className="card is-horizontal columns">
        <div className="card-image">
          <figure className="image is-128x128">
            {photoURL && <img src={photoURL} alt={displayName} />}
          </figure>
        </div>
        <div className="card-content">
          <Link to="/profile">
            <h2>{displayName}</h2>
          </Link>
          <p>{email}</p>
          <p>{moment(createdAt.toDate()).calendar()}</p>
        </div>
        <div className="content">
          <div>{children}</div>
          <br />
          <button onClick={signOut} className="button is-warning">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

CurrentUser.defaultProps = {
  displayName: "Bill Murray",
  email: "billmurray@mailinator.com",
  photoURL: "https://www.fillmurray.com/300/300",
  createdAt: new Date()
};

export default CurrentUser;
