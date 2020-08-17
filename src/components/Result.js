import React from 'react'

function Results(props) {
  return (
    <li key={props.item._tags[2]}>
      <a href={props.item.url} target='_blank' rel="noopener noreferrer">
        {props.item.title}
      </a>
    </li>
  )
}

export default Results
