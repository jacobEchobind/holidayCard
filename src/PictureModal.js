import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement(document.getElementById('root'))

export function PictureModal({modalIsOpen, setModalIsOpen}) {
  return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{position:'relative', width: '100%'}}
      >
        <button 
          onClick={() => setModalIsOpen(false)}
          style={{position: 'fixed', right: '80px', top: '80px', background:'transparent', border: 0, cursor: 'pointer'}}
        >
          <img src='/close.png' style={{width:'50px'}} alt='Close Button'/>
        </button>
        <img src='/summit-picture.png' style={{width:'100%' }} alt="Echobind team at Summit"/>
      </Modal>
  )
}