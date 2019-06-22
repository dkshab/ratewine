import React from "react";
import ReactDOM from "react-dom";
import MainApp from "./components/MainApp";
import ReviewsProvider from "./providers/ReviewsProvider";
import UserProvider from "./providers/UserProvider";

const App = () => {
  return <MainApp />;
};

ReactDOM.render(
  <UserProvider>
    <ReviewsProvider>
      <App />
    </ReviewsProvider>
  </UserProvider>,
  document.getElementById("root")
);
