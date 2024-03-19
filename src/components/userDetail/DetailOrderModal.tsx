import React, { useState, memo } from "react";
import { Button, Modal } from "antd";

const DetailOrderModal: React.FC<any> = memo(({ isModalOpen, setIsModalOpen, orderDetail }) => {
  console.log("1")
  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const handleOk = () => {};
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  console.log(orderDetail);
  console.log("2")

  return (
    <>
      <Modal
        visible={isModalOpen}
        title="Thông tin đơn hàng"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
});

export default DetailOrderModal;
