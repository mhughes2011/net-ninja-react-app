import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

function Modal(props) {
  return ReactDOM.createPortal((
    <div className='modal-backdrop'>
    {/* The inline style tag below needs to curly brackets, the first set to notify of dynamic content and the second set for a JS object, like normal CSS */}
      <div className="modal" style={{
        border:'4px solid',
        // Conditional CSS classes like below can use the ternary operator without curly brackets
        borderColor: props.isSalesModal ? '#ff4500' : '#555', 
        textAlign: 'center'
      }}>
        {props.children}
        <br />
        <button onClick={props.handleClose}>close</button>
      </div>
    </div>
  ), document.body)
}

export default Modal