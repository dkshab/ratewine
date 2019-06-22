import React, { Component } from "react";
import { firestore } from "../firebase";
import { collectIdsAndsDocs } from "../utilities";
import Review from "./Review";
import Comments from "./Comments";

class ReviewPage extends Component {
  state = { review: null, comments: [] };

  get reviewId() {
    return this.props.id;
  }

  get reviewRef() {
    return firestore.doc(`reviews/${this.reviewId}`);
  }

  get commentsRef() {
    return this.reviewRef.collection("comments");
  }

  unsubscribeFromReview = null;
  unsubscribeFromComments = null;

  componentDidMount = async () => {
    this.unsubscribeFromReview = this.reviewRef.onSnapshot(snapshot => {
      const review = collectIdsAndsDocs(snapshot);
      this.setState({ review });
    });

    this.unsubscribeFromComments = this.commentsRef.onSnapshot(snapshot => {
      const comments = snapshot.docs.map(collectIdsAndsDocs);
      this.setState({ comments });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromReview();
    this.unsubscribeFromComments();
  };

  render() {
    const { review, comments } = this.state;

    return (
      <section>
        {review && <Review {...review} />}
        <Comments comments={comments} onCreate={() => {}} />
      </section>
    );
  }
}

export default ReviewPage;
