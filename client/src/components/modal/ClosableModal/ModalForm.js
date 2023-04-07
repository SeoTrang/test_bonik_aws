import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import styles from './ModalForm.module.scss'

function ModalForm({disabled,icon,width,height,color,heading,content,btnName,Submit,btnAcceptName,url}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)

  };


  const handleShow = () => setShow(true);

  const handleSubmit = ()=>{
    Submit();
    setShow(false)
  }

  

  return (
    <div className={styles.modal} style={{width:(width?width:null), height:(height?height:null)}}>

      
      <Button  onClick={handleShow} style={{backgroundColor:color}} className={styles.btn}>
        {/* {icon?:null} */}
        <i class={icon}></i>
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
          <Button disabled={disabled} className={styles.btnAccept} style={{backgroundColor:'#06c180'}} onClick={handleSubmit}>
            {btnAcceptName}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalForm;