// pages/customer/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CustomerDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch customer details based on the `id` parameter
  // You need to implement the logic to fetch customer details

  // For testing purposes, using placeholder data
  const customer = {
    id: id,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
  };

  return (
    <main>
      <h1>Customer Details</h1>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
      <Link href="/">
       Back to Home
      </Link>
    </main>
  );
};

export default CustomerDetailsPage;
