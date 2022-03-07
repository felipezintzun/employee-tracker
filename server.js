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

// Add Role 
const addRole = () => {
    inquirer.prompt([
        {
            type:"input",
            name:"title",
            message:"Enter Role Title"
        },
        {
            type:"input",
            name:"salary",
            message:"Enter Salary"
        },
        {
            type:"input",
            name:"department_id",
            message:"Enter Department ID"
        }
    ]).then(response => {

    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?);`;
    const params = [response.title, response.salary, response.department_id]

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
    inquirer.prompt([ 
         {
            type:"input",
            name:"first_name",
            message:"Enter First Name"
        },
        {
            type:"input",
            name:"last_name",
            message:"Enter Last Name"
        },
      
        {
            type:"input",
            name:"role_id",
            message:"Enter Role ID"
        },
        {
            type:"input",
            name:"manager_id",
            message:"Enter Manager ID"
        }
    ]).then(response => {

    const sql = `INSERT INTO employee (first_name, last_name, role_id,manager_id) VALUES (?,?,?,?);`;
    const params = [response.first_name, response.last_name, response.role_id, response.manager_id]

    db.query(sql, params, (err, result) => {
        if (err) {
            throw err
        }
        console.table (result)
        initialPrompt()
    });
});
};

// Update Employee Role
const updateEmployeeRole = () => {
    inquirer.prompt([ 
         {
            type:"input",
            name:"employee_id",
            message:"Enter Employee ID"
        },
        {
            type:"input",
            name:"role_id",
            message:"Enter New Role ID"
        },

    ]).then(response => {

    const sql = `UPDATE employee SET role_id = ? WHERE id = ? ;`;
    const params = [response.role_id, response.employee_id]

    db.query(sql, params, (err, result) => {
        if (err) {
            throw err
        }
        console.table (result)
        initialPrompt()
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