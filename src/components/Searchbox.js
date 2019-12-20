import React from 'react'

export default function Searchbox(props) {
  return (
    <div className="align_center">
      <div className="search_input_div">
        <i class="material-icons">search</i>
        <input onChange={props.handleInput} className="search_input" type="text"/>
      </div>
    </div>
  )
}
