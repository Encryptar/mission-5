import React from 'react'
import './PopularOption.css'

const PopularOption = (props) => {
  return (
    <label className='popular-label'>
        <img className='popular-image' src={props.image}  alt={props.text}/>
        <div className='popular-label-text'>
            <input type={'checkbox'} value={props.value}/>
            <p>{props.text}</p>
        </div>
    </label>
  )
}

export default PopularOption