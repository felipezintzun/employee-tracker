// Dependencies required
const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table)");

  


// Prompts user to select action 
const initialPrompt =() => {

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
}

// Get all employees
const allEmployees = () => {
    const sql = `SELECT * FROM employees`;
  
    db.query(sql, (err, rows) => {
      if (err) {
         throw err;
        
      }else{
          console.table(rows);
          initialPrompt()
      } 
      
    });
  }

// Get single employee
const singleEmployee = () => {
    const sql = `SELECT * FROM candidates WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, row) => {
      if (err) {
        throw err;
      }else{
        console.table(rows);
        initialPrompt()
      } 
    });
  };

// Delete employee
const deleteEmployee = () => {
    const sql = `DELETE FROM candidates WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Candidate not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
  };

// Create employee
const createEmployee = () => {
    const errors = inputCheck(
      body,
      'first_name',
      'last_name',
      'industry_connected'
    );
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
  
    const sql = `INSERT INTO candidates (first_name, last_name, industry_connected)
      VALUES (?,?,?)`;
    const params = [body.first_name, body.last_name, body.industry_connected];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  };
  

// Default response
app.use((req, res) => {
    res.status(404).end();
});
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Jellyfish93$',
      database: 'election'
    }, () =>{
    console.log('Connected to the election database.')
    initialPrompt()
    })