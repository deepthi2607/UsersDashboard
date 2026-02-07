# Users Dashboard

A web-based dashboard application for managing users with full CRUD (Create, Read, Update, Delete) operations.

## Features

### User Management
- **View Users**: Display all existing users in a structured table format
- **Add User**: Create new user entries with validated form inputs
- **Edit User**: Update existing user information
- **Delete User**: Remove users from the system

### Form Validation
- All form fields are required and must be non-empty
- Real-time error validation during user input
- Users can only be added or updated when all validation criteria are met
- Clear error messages guide users to correct invalid inputs

## User Interface

The dashboard provides an intuitive interface with:
- **User Table**: Displays the complete list of users with their information
- **Action Buttons**: Each user row includes:
  - Edit button - Opens form to modify user details
  - Delete button - Removes the user after confirmation
- **Add User Button**: Accessible button to create new user entries

## How It Works

### Adding a New User
1. Click the "Add User" button
2. Fill in all required form fields
3. The form validates input in real-time
4. Submit the form only when all fields are valid and non-empty
5. New user appears in the table upon successful addition

### Editing a User
1. Click the "Edit" button next to the user you want to modify
2. The form populates with existing user data
3. Make your changes to the form fields
4. All fields are validated before submission
5. User information updates in the table upon successful edit

### Deleting a User
1. Click the "Delete" button next to the user you want to remove
2. Confirm the deletion action
3. User is removed from the table

## Validation Rules

- All form fields must be filled out (no empty fields allowed)
- Each field is validated for errors
- Form submission is disabled until all validation passes
- Error messages are displayed for invalid inputs

## Technologies Used

- HTML5
- CSS3
- JavaScript
- React / Vue / Angular (specify your framework)
-  **DummyJSON API** - Used to fetch initial list of users (https://dummyjson.com/users)

## Live Demo

 **[View Live Demo](https://users-dashboard-trcc.vercel.app/)**

## Source Code

 **[View Source Code on GitHub](https://github.com/deepthi2607/UsersDashboard)**

---

## Usage

1. Launch the application
2. The dashboard loads with the existing users table
3. Use the "Add User" button to create new users
4. Use "Edit" and "Delete" buttons in each row to manage individual users
5. All changes are validated before being applied

## Future Enhancements

- Search and filter functionality
- Sorting options for table columns
- Pagination for large user lists
- Export user data
- User roles and permissions
- Bulk operations
