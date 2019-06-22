import React, { Component, createContext } from "react";
import { firestore } from "../firebase";
import { collectIdsAndsDocs } from "../utilities";

export const ReviewsContext = createContext();

class ReviewsProvider extends Component {
  state = { reviews: [] };

  unsubscribeFromFirestore = null;

  componentDidMount = () => {
    this.unsubscribeFromFirestore = firestore
      .collection("reviews")
      .onSnapshot(snapshot => {
        const reviews = snapshot.docs.map(collectIdsAndsDocs);
        this.setState({ reviews });
      });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  render() {
    const { reviews } = this.state;
    const { children } = this.props;

    return (
      <ReviewsContext.Provider value={reviews}>
        {children}
      </ReviewsContext.Provider>
    );
  }
}

export default ReviewsProvider;
