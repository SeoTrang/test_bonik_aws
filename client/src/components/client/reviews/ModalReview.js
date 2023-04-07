import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import styles from './ModalReview.module.scss'

function ModalReview() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='modalReview'>
      
      <button onClick={handleShow}>Gửi đánh giá</button>

      

      <Modal show={show} onHide={handleClose} className="modalReview">
        <Modal.Header closeButton>
          <Modal.Title>Đánh giá sản phẩm iPhone 14 Pro Max</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
            <div className={styles.bodyReview}>
                <div className={styles.product}>
                    <img src="https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-vang-1-2.jpg" alt="" />
                    <span>iPhone 14 Pro Max</span>
                </div>

                <div className={styles.stars}>
                    <ul className={styles.listStars}>
                        <li className='star'>
                            <i class="fa-regular fa-star"></i>
                            <span>Rất tệ</span>
                        </li>
                        <li className='star'>
                            <i class="fa-regular fa-star"></i>
                            <span>Tệ</span>    
                        </li>
                        <li className='star'>
                            <i class="fa-regular fa-star"></i>
                            <span>Bình thường</span>
                        </li>
                        <li className='star'>
                            <i class="fa-regular fa-star"></i>
                            <span>Tốt</span>    
                        </li>
                        <li className='star'>
                            <i class="fa-regular fa-star"></i>
                            <span>Rất tốt</span>
                        </li>
                    </ul>  
                    
                </div>
            </div>
            
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="reviewBtnCacle">
            Hủy
          </Button>
          <Button variant="primary" onClick={handleClose} className="reviewBtnSend">
            Gửi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default ModalReview;