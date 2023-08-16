// pages/index.tsx
import React, { useState, useEffect } from 'react';
import CustomerList from '../components/CustomerList';
import Link from 'next/link';

const Home = () => {
  const [customers, setCustomers] = useState([]);

  // Simulating initial customer data
  useEffect(() => {
    // Fetch customer data from your API or source
    const fetchedCustomers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
      // ... other customer data
    ];

    setCustomers(fetchedCustomers);
  }, []);

  const handleDeleteCustomer = (customerId) => {
    // Filter out the deleted customer and update the list
    const updatedCustomers = customers.filter((customer) => customer.id !== customerId);
    setCustomers(updatedCustomers);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Customer List</h1>
      <CustomerList customers={customers} onDeleteCustomer={handleDeleteCustomer} />
      <Link href="/add-customer">
        <span className="mt-4 text-blue-500 hover:underline">Add Customer</span>
      </Link>
    </main>
  );
};

export default Home;
