import React from 'react'

export default function Searchbox(props) {
  return (
    <div className="search_input_div">
      <input onChange={props.handleInput} className="search_input" type="text"/>
    </div>
  )
}
