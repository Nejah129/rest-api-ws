import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editUserOneAction, getUsers } from "../redux/actions";
const EditUser = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [number, setNumber] = useState(user.number);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedOne = {
      _id: user._id,
      name,
      email,
      number
    };
    dispatch(editUserOneAction(editedOne));
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
      <button onClick={openModal}>Edit</button>
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

export default EditUser;
