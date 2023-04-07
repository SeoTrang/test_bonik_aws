import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function UnClosableModal({category}) {
  const [show, setShow] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [warning, setWarning] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    // xử lý các dữ liệu cần thiết
    category(selectedCategory); // truyền dữ liệu về cho parent component
  
    if (selectedCategory) {
        setShow(false); // đóng modal
    }else{
        setWarning(false)
    }

  };

  const handleSelectChange = (event) => {

    setSelectedCategory(event.target.value); // lưu giá trị được chọn vào state
    };

  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton={false}>
          <Modal.Title>Vui lòng chọn danh mục</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <Form.Select onChange={handleSelectChange}>
                        <option>Chọn danh mục</option>
                        <option value="dien-thoai">Điện thoại</option>
                        <option value="laptop">Laptop</option>
                        <option value="smartwatch">SmartWatch</option>

                    </Form.Select>

                    <div style={{marginTop:"1em"}} className={`warning ${warning ? ' styleNone' : ''}`}>
                        <span>Vui lòng chọn danh mục</span>
                    </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button onClick={handleSubmit} variant="primary">Xác nhận</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default UnClosableModal;