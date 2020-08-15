import React from 'react';
import Form from './components/Form'
import Results from './components/Results'

import './App.css';

function App() {
  const submitHandler = (e) => {
    e.preventDefault()

    fetch(`http://hn.algolia.com/api/v1/search?query=${e.target.search.value}&tags=story`)
      .then(res => res.json())
      .then(data => console.log(data))
  }
  

  return (
    <div>
      <Form submitHandler={submitHandler}/>
      <Results/>
    </div>
  );
}

export default App;
