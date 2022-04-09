import React from 'react'

function Title({titleProp, subtitleProp}) {
  return (
    <div>
      <h1 className="title">{titleProp}</h1>
      <br />
      <h2 className="subtitle">{subtitleProp}</h2>
    </div>
  )
}

export default Title