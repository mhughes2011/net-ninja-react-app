import React, {useState} from 'react'
import './App.css';

import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'

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
  
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((e) => {
        return id !== e.id
      })
    })
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
      {showEvents && <EventList events={events} handleClick={handleClick}/>}


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
