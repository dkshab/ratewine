import React, { useContext } from "react";
import moment from "moment";
import { firestore } from "../firebase";
import { UserContext } from "../providers/UserProvider";
import { Link } from "@reach/router";

const belongsToCurrentUser = (currentUser, postAuthor) => {
  if (!currentUser) return false;
  return currentUser.uid === postAuthor.uid;
};

const Review = ({ id, title, content, user, createdAt, stars, comments }) => {
  const currentUser = useContext(UserContext);
  const reviewRef = firestore.doc(`reviews/${id}`);
  const remove = () => reviewRef.delete();
  const star = () => reviewRef.update({ stars: stars + 1 });

  return (
    <div className="tile is-parent is-shady">
      <article className="tile is-child notification is-white">
        <Link to={`/reviews/${id}`}>
          <p className="title">{title}</p>{" "}
        </Link>
        <div className="content">{content}</div>
        <div className="tags has-addons">
          <p>
            <span role="img" aria-label="star">
              ⭐️
            </span>
            {stars}
          </p>
          <p>
            <span role="img" aria-label="comments">
              🙊
            </span>
            {comments}
          </p>
          <p>
            Posted by {user.displayName}
            {moment(createdAt.toDate()).calendar()}
          </p>
          <div>
            <button onClick={star} className="button is-success">
              Star
            </button>
            {belongsToCurrentUser(currentUser, user) && (
              <button onClick={remove} className="button is-danger">
                Delete
              </button>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

Review.defaultProps = {
  title: "A hot review",
  content:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore facere corporis corrupti non, aspernatur tempora id perspiciatis dolorem alias aut, praesentium maxime recusandae hic esse saepe modi nam soluta iusto.",
  user: {
    id: "123",
    displayName: "Bill Murray",
    email: "billmurray@mailinator.com",
    photoURL: "https://www.fillmurray.com/300/300"
  }
};

export default Review;
