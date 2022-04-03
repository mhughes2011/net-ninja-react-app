import React from 'react'
import './App.css';

function App() {
  let name = 'mario'
  
  const handleNameChange = () => {
    name = 'luigi'
    console.log(`The value of name is ${name}`)
  }

  return (
    <div className='App'>
      <h1>My name is {name}</h1>
      <button onClick={handleNameChange}>Change Name</button>
    </div>
  );
}

export default App;
