import React from 'react'
import './SearchLabel.css'

const SearchLabel = (props) => {
  return (
    <label className='search-label'>
        <img src={props.image}  alt={props.text}/>
        <div className='search-label-text'>
            <input type={'checkbox'} value={props.value}/>
            <p>{props.text}</p>
        </div>
    </label>
  )
}

export default SearchLabel