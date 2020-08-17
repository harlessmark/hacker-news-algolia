import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";

import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  const searchResults = data => {
    return {
      type: "add",
      payload: {
        searchQueries: data.hits,
      },
    };
  };

  const submitHandler = e => {
    e.preventDefault();

    fetch(
      `http://hn.algolia.com/api/v1/search?query=${e.target.search.value}&tags=story`
    )
      .then(res => res.json())
      .then(data => store.dispatch(searchResults(data)));
  };

  return (
    <Provider store={store}>
      <Form submitHandler={submitHandler} />
      <Results />
    </Provider>
  );
}

export default App;
