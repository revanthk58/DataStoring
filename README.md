Documentation for Form Data Storage

Overview:
This document provides details about how the data submitted via the form on the web page is stored in the SQLite database. The data includes the user's name, email, phone, and date of birth, which are captured through the form submission.

Form Fields:
Name: The full name of the user.
Email: The user's email address.
Phone: The user's phone number.
Date of Birth (DOB): The user's date of birth.

Database Structure
The data submitted through the form is stored in an SQLite database. The database is named formData.db, and it contains a table called users with the following structure:

users Table Schema:
Column Name	Data Type	Description
id	INTEGER	The unique identifier for each record. This column is an auto-incrementing primary key.
name	TEXT	The full name of the user.
email	TEXT	The email address of the user.
phone	TEXT	The phone number of the user.
dob	TEXT	The date of birth of the user. Stored as a string in the format YYYY-MM-DD.
