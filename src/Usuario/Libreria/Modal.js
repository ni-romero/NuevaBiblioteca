import React from "react";
import FormularioEdit from "./FormularioEdit";
import { Modal } from "react-bootstrap";

const FormEdit = ({ visible, setVisible, libro,fetchLibrosAll }) => {

//   const handleOk = (e) => {
//     setVisible(false);
//   };

//   const handleCancel = (e) => {
//     setVisible(false);
//   };

  return (
    <Modal
    //   title="Edicion de libro"
    //   visible={visible}
    //   onOk={handleOk}
    //   onCancel={handleCancel}
    >
      <FormularioEdit
    //   fetchLibrosAll={fetchLibrosAll}
    //     libro={libro}
    //     setVisible={setVisible}
      
      />
    </Modal>
  );
};

export default FormEdit;