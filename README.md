# Documentation for Form Data Storage

### Description
This project is a simple web application built with Node.js, Express.js, and SQLite. It allows users to submit personal information through a form (name, email, phone, date of birth), which is then saved into an SQLite database.

The backend is powered by Express.js and communicates with an SQLite database to store form submissions. The frontend is a simple HTML form that collects user data and submits it to the backend.

This document provides details about how the data submitted via the form on the web page is stored in the SQLite database.
       The data includes the user's name, email, phone, and date of birth, which are captured through the form submission.

#### Features
User can submit name, email, phone number, and date of birth.
Data is stored in an SQLite database.
Simple and clean frontend with form validation.
Success and error messages are displayed to the user.


### Technologies Used
Node.js: JavaScript runtime for server-side logic.

Express.js: Web framework for Node.js to handle HTTP requests.

SQLite: Lightweight SQL database for storing form data.

HTML/CSS/JavaScript: Frontend form for user interaction.



### Prerequisites
To run this project locally, you need to have the following installed on your machine:

Node.js: You can download it from nodejs.org.
SQLite: This project uses SQLite for storing data. However, SQLite is bundled with the application, so you don’t need to install it separately.
Text Editor (e.g., VS Code) to view and edit the code.

#### Form Fields:
         Name: The full name of the user.
         Email: The user's email address.
         Phone: The user's phone number.
         Date of Birth (DOB): The user's date of birth.

#### Database Structure
The data submitted through the form is stored in an SQLite database. The database is named formData.db, and it contains a table called –––––users––––– with the following structure:


#### users Table Schema:

This table stores the information submitted from the form.

| Column Name | Data Type | Description                                    |
|-------------|-----------|------------------------------------------------|
| `id`        | INTEGER   | The unique identifier for each record. This is an auto-incrementing primary key. |
| `name`      | TEXT      | The full name of the user.                     |
| `email`     | TEXT      | The email address of the user.                 |
| `phone`     | TEXT      | The phone number of the user.                  |
| `dob`       | TEXT      | The date of birth of the user (format: YYYY-MM-DD). |

