import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <React.Fragment>
      <h1>こんにちは！</h1>
      <p>test</p>
    </React.Fragment>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
