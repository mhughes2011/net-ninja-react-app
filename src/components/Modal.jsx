import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

function Modal(props) {
  return ReactDOM.createPortal((
    <div className='modal-backdrop'>
    {/* The inline style tag below needs to curly brackets, the first set to notify of dynamic content and the second set for a JS object, like normal CSS */}
      <div className="modal" style={{
        border:'4px solid',
        borderColor: '#ff4500',
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