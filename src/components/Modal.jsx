import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

function Modal(props) {
  return ReactDOM.createPortal((
    <div className='modal-backdrop'>
      <div className="modal">
        {props.children}
        <br />
        <button onClick={props.handleClose}>close</button>
      </div>
    </div>
  ), document.body)
}

export default Modal