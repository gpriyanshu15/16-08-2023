import React from "react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <p>Are you sure you want to delete this customer?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default ConfirmationModal;
