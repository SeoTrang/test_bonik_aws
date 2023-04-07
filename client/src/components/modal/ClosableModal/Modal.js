import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import styles from './Modal.module.scss'

function MyModal({icon,width,height,color,heading,content,btnName}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(content);

  return (
    <div className={styles.modal} style={{width:(width?width:null)}}>

      
      <Button onClick={handleShow} style={{backgroundColor:color}} className={styles.btn}   variant="danger" >
        {/* {icon?:null} */}
        <i class="fa-solid fa-trash"></i>
        <span>{btnName}</span>
      </Button>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" style={{backgroundColor:{color}}} onClick={handleClose}>
            {btnName}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MyModal;