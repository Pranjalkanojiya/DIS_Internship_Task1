const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// API for adding a student
app.post("/students", (req, res) => {

    const {
        name,
        enrollment_no,
        email,
        mobile,
        branch
    } = req.body;

    const sql =
        `INSERT INTO students
        (name,enrollment_no,email,mobile,branch)
        VALUES (?,?,?,?,?)`;

    db.query(
        sql,
        [name, enrollment_no, email, mobile, branch],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Student Added Successfully"
            });
        }
    );
});


// API to get All Students
app.get("/students", (req, res) => {

    db.query(
        "SELECT * FROM students ORDER BY enrollment_no ASC;",
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(result);
        }
    );
});


app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});