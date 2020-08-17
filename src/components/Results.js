import React from 'react'
import Result from './Result'
import { useSelector } from 'react-redux'

function Results() {
  const results = useSelector(state => state)
  const lastResults = results[results.length -1]

  return (
    <ol>
      {lastResults &&
        lastResults.searchQueries.map((item) => {
          return <Result item={item} />;
        })}
    </ol>
  )
}

export default Results
