import React, { Component } from "react";
import { firestore, auth } from "../firebase";

class AddReview extends Component {
  state = { title: "", content: "" };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { title, content } = this.state;
    const { uid, displayName, email, photoURL } = auth.currentUser || {};

    const review = {
      title,
      content,
      user: {
        uid,
        displayName,
        email,
        photoURL
      },
      stars: 0,
      favorites: 0,
      comments: 0,
      createdAt: new Date()
    };

    firestore.collection("reviews").add(review);

    this.setState({ title: "", content: "" });
  };

  render() {
    const { title, content } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              name="content"
              placeholder="Body"
              value={content}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <input className="button" type="submit" value="Create Post" />
      </form>
    );
  }
}

export default AddReview;
