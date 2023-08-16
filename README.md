# Customer Data Management App

The purpose of this project is to demonstrate skills in building a web application using Next.js and React. The app allows users to manage customer information, including adding, viewing, updating, and deleting customer details. It assesses the ability to implement a functional and well-structured app with proper input validation and robustness.

## Features

1. **Homepage:**
   - Displays a list of customers with basic information (name, email, phone number).
   - Provides a link to navigate to the "Add Customer" page.

2. **Add Customer Page:**
   - Allows users to add customer data with the following fields: Name (required), Email (required, valid email format), Phone Number (required, valid phone number format).
   - Implements client-side validation for input fields.
   - Navigates back to the homepage and displays the updated customer list upon successful submission.

3. **View and Update Customer Details:**
   - Allows users to click on a customer from the list to view their detailed information on a separate page.
   - Displays all available customer details.
   - Provides an option to update a customer's information from the customer details page.
   - Implements client-side validation for input fields similar to the "Add Customer" page.
   - Updates the customer's information and navigates back to the customer details page upon successful submission.

4. **Delete Customer:**
   - Provides an option to delete a customer from the list on the homepage or the customer details page.
   - Implements a confirmation modal before deleting.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
##Install dependencies:

bash
cd your-repo-name
npm install

##
Run the development server:

bash
npm run dev
