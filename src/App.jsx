import React, { Component } from "react";
import ReactDOM from "react-dom";
import { firestore, auth, createUserProfileDocument } from "./firebase";

import Reviews from "./components/Reviews";
import { collectIdsAndsDocs } from "./utilities";
import Authentication from "./components/Authentication";

class App extends Component {
  state = {
    reviews: [],
    user: null
  };

  unsubscribeFromFirestore = null;
  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromFirestore = firestore
      .collection("reviews")
      .onSnapshot(snapshot => {
        const reviews = snapshot.docs.map(collectIdsAndsDocs);
        this.setState({ reviews });
      });

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const user = await createUserProfileDocument(userAuth);
      console.log(user);
      this.setState({ user });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
    this.unsubscribeFromAuth();
  };

  render() {
    const { reviews, user } = this.state;
    return (
      <section>
        <div>
          <h1 className="title is-1">Rate Wine</h1>
          <Authentication user={user} />
          <hr />
          <Reviews reviews={reviews} />
        </div>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
