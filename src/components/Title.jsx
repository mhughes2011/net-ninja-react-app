import React from 'react'
import './Title.css'

function Title({titleProp, subtitleProp}) {
  return (
    <div className='title-block'>
      <h1 className="title">{titleProp}</h1>
      <br />
      <h2 className="subtitle">{subtitleProp}</h2>
    </div>
  )
}

export default Title