import React from 'react'
import './Modal.css'

function Modal(props) {
  return (
    <div className='modal-backdrop'>
      <div className="modal">
        {props.children}
      </div>
    </div>
  )
}

export default Modal