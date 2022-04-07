import React, {useState} from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('mario')
  
  const handleNameChange = () => {
    const userName = prompt('Give me your name...')
    setName(userName)
    console.log(`The value of name is ${userName}`)
  }

  return (
    <div className='App'>
      <h1>My name is {name}</h1>
      <button onClick={handleNameChange}>Change Name</button>
    </div>
  );
}

export default App;
