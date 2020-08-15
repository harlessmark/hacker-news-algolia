import React from 'react'
import SearchBar from './SearchBar'
import Button from './Button'

function Form(props) {
  return (
    <form onSubmit={props.submitHandler}>
      <SearchBar/>
      <Button/>
    </form>
  )
}

export default Form
