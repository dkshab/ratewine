import React, { Component } from "react";
import { auth, firestore, storage } from "../firebase";

class UserProfile extends Component {
  state = { displayName: "" };

  get uid() {
    return auth.currentUser.uid;
  }

  get userRef() {
    return firestore.doc(`users/${this.uid}`);
  }

  get file() {
    return this.imageInput && this.imageInput.files[0];
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { displayName } = this.state;

    if (displayName) {
      this.userRef.update({ displayName });
    }

    if (this.file) {
      storage
        .ref()
        .child("user-profiles")
        .child(this.uid)
        .child(this.file.name)
        .put(this.file)
        .then(response => response.ref.getDownloadURL())
        .then(photoURL => this.userRef.update({ photoURL }));
    }
  };

  render() {
    const { displayName } = this.state;
    return (
      <section className="section">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <input
              className="input"
              type="text"
              value={displayName}
              name="displayName"
              onChange={this.handleChange}
              placeholder="Display Name"
            />
          </div>
          <div className="field">
            <input
              className="input"
              type="file"
              ref={ref => (this.imageInput = ref)}
            />
          </div>
          <input className="button" type="submit" />
        </form>
      </section>
    );
  }
}

export default UserProfile;
