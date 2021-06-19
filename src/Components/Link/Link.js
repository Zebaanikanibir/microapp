import React from 'react';
import Modal from 'react-modal';
import {Button } from 'react-bootstrap';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
const Link = ({modalIsOpen, questionLink, closeModal} ) => {

    
  return (
    <div>
      
      <Modal
        isOpen={modalIsOpen}
    
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        
        <a target="_blank" href={questionLink}>{questionLink} </a>
        
      </Modal>
    </div>
  );
}

export default Link;
