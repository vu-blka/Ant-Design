import React from "react";
import { Button, Modal } from "antd";
import { useState } from "react";

function AppWork() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div id="works" className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How it works</h2>
          <p>
            Perspiciatis vero similique, ut ducimus modi ipsam autem tempora
          </p>
        </div>
        <div className="contentHolder">
          <Button onClick={showModal}>
            <i className="fas fa-play"></i>
          </Button>
        </div>
        <Modal
          title="Ai muốn nghe không - Idol Đen Vâu"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <iframe
            height="300px"
            width="100%"
            title="Ai muốn nghe không - Idol Đen Vâu"
            src="https://www.youtube.com/embed/JxBnLmCOEJ8"
          ></iframe>
        </Modal>
      </div>
    </div>
  );
}

export default AppWork;
