import React from 'react'

function EventList({events, handleClick}) {
  return (
    <div>
      {events.map((item, index) => (
        <React.Fragment key={item.id}>
          <h2>{index} - {item.title}</h2>
          <button onClick={() => handleClick(item.id)}>Delete Event</button>
        </React.Fragment>
      ))}
    </div>
  )
}

export default EventList