// components/CustomerList.js
import React, { useState } from "react";
import Link from "next/link";
import ConfirmationModal from "./ConfirmationModal"; // Import the ConfirmationModal component

const CustomerList = ({ customers, onDeleteCustomer }) => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const openModal = (customer) => {
    setSelectedCustomer(customer);
  };

  const closeModal = () => {
    setSelectedCustomer(null);
  };

  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <div key={customer.id} className="customer">
          <p>Name: {customer.name}</p>
          <p>Email: {customer.email}</p>
          <p>Phone: {customer.phone}</p>
          <button onClick={() => openModal(customer)}>Delete</button>
        </div>
      ))}
      {selectedCustomer && (
        <ConfirmationModal
          isOpen={true} // Open the modal when selectedCustomer is not null
          onClose={closeModal}
          onConfirm={() => {
            onDeleteCustomer(selectedCustomer.id);
            closeModal();
          }}
        />
      )}
    </div>
  );
};

export default CustomerList;
