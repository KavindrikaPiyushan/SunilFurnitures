import React from 'react'
import '../pages/css/home.css';
export default function promiseCard({title,description,Icon}) {
  return (
    <div className='promisecrd flex flex-col'>

      <Icon/>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
} 