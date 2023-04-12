import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addNewUserNew, getUsers } from "../redux/actions";
const AddNewUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewUserNew(name, email, number));
    dispatch(getUsers());
    closeModal();
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Add</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="phone  Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <div>
            <button type="submit">Confirme</button>
            <button onClick={() => closeModal()}>Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddNewUser;
