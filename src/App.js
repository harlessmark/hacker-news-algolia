import React, { useState } from 'react';
import Form from './components/Form'
import Results from './components/Results'

import './App.css';

function App() {
  const [results, setResults] = useState(null)

  const submitHandler = (e) => {
    e.preventDefault()

    fetch(`http://hn.algolia.com/api/v1/search?query=${e.target.search.value}&tags=story`)
      .then(res => res.json())
      .then(data => setResults(data.hits))
  }

  return (
    <div>
      <Form submitHandler={submitHandler}/>
      <Results results={results}/>
    </div>
  );
}

export default App;
