// pages/add-customer.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import CustomerForm from '../components/CustomerForm';
import Link from 'next/link';

const AddCustomer = () => {
  const router = useRouter();
  const [customers, setCustomers] = useState([]); // State to store the list of customers

  const handleSubmit = (formData) => {
    // Create a new customer object with the submitted form data
    const newCustomer = {
      id: customers.length + 1, // Generating a unique ID (you may need to adjust this logic)
      ...formData,
    };

    // Update the list of customers with the new customer
    setCustomers([...customers, newCustomer]);

    // Redirect to homepage after successful submission
    router.push('/');
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Add Customer</h1>
      <CustomerForm onSubmit={handleSubmit} initialValues={{ name: '', email: '', phone: '' }} />
      <Link href="/">
        <span className="mt-4 text-blue-500 hover:underline">Back to Home</span>
      </Link>
    </main>
  );
};

export default AddCustomer;
