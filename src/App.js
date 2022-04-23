import React, {useState} from 'react'
import './App.css';

import Title from './components/Title'
import Modal from './components/Modal'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: 'marios birthday bash', id: 1},
    {title: 'bowsers live stream', id: 2},
    {title: 'race on moo moo farm', id: 3}
  ])

  const handleClose = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const subtitle='All the latest events in Marioland'
  
  const handleClick = (item) => {
    setEvents(events.filter((e) => e.id !== item.id))
  }

  return (
    <div className='App'>
      <Title titleProp='Events in Your Area' subtitleProp={subtitle} />
      
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
        <React.Fragment key={item.id}>
          <h2>{index} - {item.title}</h2>
          <button onClick={() => handleClick(item)}>Delete Event</button>
        </React.Fragment>
      ))}


      {/* <Modal>
        <h2>35% Off Coupon Code!</h2>
        <p>Use the code NINJA20 at the checkout.</p>
      </Modal> */}
      <div>
        <button onClick={openModal}>Show Modal</button>
      </div>

      {showModal && 
        <Modal handleClose={handleClose}>
          <h2>Terms and Conditions</h2>
          <p>Lorem Ipsum</p>
        </Modal>
      }
    </div>
  );
}

export default App;
