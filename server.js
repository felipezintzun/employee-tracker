// Dependencies required
const mysql = require("mysql");
const inquirer = require("inquirer");

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Jellyfish93$',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );


// Prompts user to select action 
inquirer.prompt([
    {
        type:"list",
        name:"task",
        message:"What are you looking to do?",
        choices: [
            "View Employees",
            "View Employees by Department",
            "Add Employee",
            "Remove Employees",
            "Update Employee Role",
            "Add Role",
            "End"]
    }
]);


  // Get all employees
  app.get('/api/candidates', (req, res) => {
    const sql = `SELECT * FROM candidates`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });

  

  // Get single employee

  // Delete employee

  // Create employee

  // Default response
  