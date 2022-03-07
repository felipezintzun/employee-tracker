// Dependencies required
const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");


// Get all departments
const allDepartments = () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, res) => {
        if (err) {
            throw err;

        } else {
            console.table(res);
            initialPrompt()
        }
    });
}

// Get all roles
const allRoles = () => {
    const sql = `SELECT * FROM role`;

    db.query(sql, (err, res) => {
        if (err) {
            throw err;

        } else {
            console.table(res);
            initialPrompt()
        }
    });
}

// Get all employees
const allEmployees = () => {
    const sql = `SELECT * FROM employee`;

    db.query(sql, (err, rows) => {
        if (err) {
            throw err;

        } else {
            console.table(rows);
            initialPrompt()
        }

    });
}

// Get single employee
// const singleEmployee = () => {
//     const sql = `SELECT * FROM employees WHERE id = ?`;
//     const params = [req.params.id];

//     db.query(sql, params, (err, row) => {
//         if (err) {
//             throw err;
//         } else {
//             console.table(rows);
//             initialPrompt()
//         }
//     });
// };

// Delete employee
// const deleteEmployee = () => {
//     const sql = `DELETE FROM employees WHERE id = ?`;
//     const params = [req.params.id];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.statusMessage(400).json({
//                 error: res.message
//             });
//         } else if (!result.affectedRows) {
//             res.json({
//                 message: 'Candidate not found'
//             });
//         } else {
//             res.json({
//                 message: 'deleted',
//                 changes: result.affectedRows,
//                 id: req.params.id
//             });
//         }
//     });
// };


// Add Department
const addDepartment = () => {
    inquirer.prompt([
        {
            type:"input",
            name:"department_name",
            message:"Enter Department Name"
        }
    ]).then(response => {

    const sql = `INSERT INTO department (name) VALUES (?);`;
    const params = response.department_name;

    db.query(sql, params, (err, result) => {
        if (err) {
            throw err
        }
        console.table (result)
        initialPrompt()
    });
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
        res.status(400).json({
            error: errors
        });
        return;
    }

    const sql = `INSERT INTO candidates (first_name, last_name, industry_connected)
      VALUES (?,?,?)`;
    const params = [body.first_name, body.last_name, body.industry_connected];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({
                error: err.message
            });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
};




// Prompts user to select action 
const initialPrompt = () => {

    inquirer.prompt([{
        type: "list",
        name: "task",
        message: "What are you looking to do?",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role",
            "End"
        ]
    }, ]).then((response) => {
        switch (response.task) {
            case 'View All Departments':
                console.log("View Departments")
                allDepartments();
                break;

            case 'View All Roles':
                allRoles();
                break;

            case 'View All Employees':
                allEmployees();
                break;

            case 'Add a Department':
                addDepartment();
                break;

            case 'Add a Role':
                addRole();
                break;

            case 'Add an Employee':
                createEmployee();
                break;

            case 'Update an Employee Role':
                updateEmployeeRole();
                break;

            default:
                db.end()
                process.exit(0)
        }
    });
};

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Jellyfish93$',
    database: 'employee_tracker'
})
db.connect(() => {
    console.log('Connected to the election database.')
    initialPrompt()
})