# HR Management System Documentation

## Overview

This document provides an overview and setup guide for the HR Management System. This system allows for the management of employee information, including adding new employee data and displaying it by department.

## Files and Structure

The system consists of two main HTML files, a CSS file for styling, and a JavaScript file containing the logic for employee management.

- `index.html`: The main entry point of the HR Management System. Contains the UI for listing employees by department and adding new employees.
- `accounting.html`: A page dedicated to accounting functionalities (currently placeholders).
- `style.css`: Contains the styles applied across the HR Management System.
- `app.js`: Contains the logic for creating, storing, and rendering employee data.

## HTML Structure

### Main Page (`index.html`)

- **Header**: Includes the title of the system and navigation links to the Home page and Accounting page. It also has a button to toggle the visibility of the form used to add new employees.
- **Main Section**:
  - A form (`#createEmployeeForm`) for adding new employees. Fields include full name, department, level, and image URL.
  - Sections for each department (Administration, Finance, Marketing, Development) to display employees belonging to that department.

### Accounting Page (`accounting.html`)

- Similar header as the main page with navigation links.
- The main content area is reserved for accounting functionalities.

## CSS File (`style.css`)

The CSS file should include styles for the header, main section, forms, and department sections. As the styles are not provided in the markdown, ensure to style these elements for a better user interface.

## JavaScript (`app.js`)

### `Employee` Class

- Constructor parameters include `employeeID`, `fullName`, `department`, `level`, `imageUrl`.
- The `render` method dynamically creates and inserts employee data into the corresponding department section in the HTML document.

### Utility Functions

- `calculateSalary(level)`: Determines salary based on employee level.
- `generateID()`: Generates a unique ID for each employee.
- `calculateNetSalary(salary)`: Calculates the net salary after taxes.
- `saveData(employee)`: Saves employee data to local storage.
- `getData()`: Retrieves employee data from local storage.

### Event Listeners

- Listeners for DOM content loaded, form submission, and the toggle visibility of the form.

## Setup and Usage

1. Place all files in the same directory.
2. Open `index.html` in a web browser to view the HR Management System.
3. Use the form to add new employees and see them rendered under the appropriate department.
4. Navigate to `accounting.html` for accounting functionalities (to be developed).

## Notes

- Ensure JavaScript is enabled in your web browser to use all functionalities.
- The system uses local storage to persist data across sessions.

