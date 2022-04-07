import React, {useState} from 'react'
import './App.css';

function App() {
  const [events, setEvents] = useState([
    {title: 'marios birthday bash', id: 1},
    {title: 'bowsers live stream', id: 2},
    {title: 'race on moo moo farm', id: 3}
  ])
  
  const handleClick = (item) => {
    setEvents(events.filter((e) => e.id !== item.id))
  }

  return (
    <div className='App'>
      {/* You always get access to index when dealing with array methods */}
      {events.map((item, index) => (
        <div key={item.id}>
          <h2>{index} - {item.title}</h2>
          <button onClick={() => handleClick(item)}>Delete Event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
