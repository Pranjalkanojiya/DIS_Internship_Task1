# DIS_Internship_Task1
# Student Registration System

## Overview

A simple full-stack Student Registration System developed using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL.

The application allows users to:

* Register new students
* Store student details in a MySQL database
* View all registered students
* Display records sorted by Enrollment Number

---

## Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MySQL

---

## Features

* Student Registration Form
* Input Validation
* Store Student Records in MySQL
* Fetch and Display All Students
* Records Sorted by Enrollment Number
* Responsive User Interface

---

## Database Schema

### Table: students

| Column        | Type                    |
| ------------- | ----------------------- |
| enrollment_no | VARCHAR(20) PRIMARY KEY |
| name          | VARCHAR(100)            |
| email         | VARCHAR(100) UNIQUE     |
| mobile        | VARCHAR(10)             |
| branch        | VARCHAR(100)            |
| created_at    | TIMESTAMP               |

---

## API Endpoints

### Add Student

POST /students

### Get All Students

GET /students

---

## Project Structure

student-registration/

├── public/

│ ├── index.html

│ ├── style.css

│ └── script.js

├── screenshots/

├── db.js

├── server.js

├── schema.sql

├── package.json

└── README.md

---

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Create the database using schema.sql

4. Configure MySQL credentials in db.js

5. Start the server

```bash
node server.js
```

6. Open in browser

```text
http://localhost:3000
```

---

## Screenshots

### Registration Form

<img width="1920" height="1080" alt="Home_Page" src="https://github.com/user-attachments/assets/f5939268-dccd-4d30-b32c-b80107560695" />

<img width="1920" height="1080" alt="Succesfull_Registration" src="https://github.com/user-attachments/assets/d92f1ec6-af5e-468d-a4d0-392be326b104" />



### Student Records

<img width="1920" height="1080" alt="Viewing_Students_Record" src="https://github.com/user-attachments/assets/1cc5df8b-532f-4358-9fc0-bc9f00e6a8ae" />


---

## Author

Pranjal Kanojiya

SGSITS Indore

