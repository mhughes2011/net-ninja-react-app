import React, {useState} from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('mario')
  const [events, setEvents] = useState([
    {title: 'marios birthday bash', id: 1},
    {title: 'bowsers live stream', id: 2},
    {title: 'race on moo moo farm', id: 3}
  ])
  
  const handleNameChange = () => {
    const userName = prompt('Give me your name...')
    setName(userName)
    console.log(`The value of name is ${userName}`)
  }

  return (
    <div className='App'>
      <h1>My name is {name}</h1>
      <button onClick={handleNameChange}>Change Name</button>

      {/* You always get access to index when dealing with array methods */}
      {events.map((item, index) => (
        <div key={item.id}>
          <h2>{index} - {item.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
