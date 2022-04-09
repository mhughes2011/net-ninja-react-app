import React, {useState} from 'react'
import './App.css';

import Title from './components/Title';

function App() {
  const [showEvents, setShowEvents] = useState(true)
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
      <Title />
      
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {/* You always get access to index when dealing with array methods */}
      {showEvents && events.map((item, index) => (
        <div key={item.id}>
          <h2>{index} - {item.title}</h2>
          <button onClick={() => handleClick(item)}>Delete Event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
