import React from 'react'
import Result from './Result'

function ResultsContainer(props) {
  return (
    <ol>
      {props.results === null ? null : (
        props.results.map(item => {
          return <Result item={item}/>
        })
      )}
    </ol>
  )
}

export default ResultsContainer
