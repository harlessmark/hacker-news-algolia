import React from 'react'

function Result(props) {
  return (
    <li key={props.item._tags[2]}>
      <a href={props.item.url} target='_blank' rel="noopener noreferrer">
        {props.item.title}
      </a>
    </li>
  )
}

export default Result
