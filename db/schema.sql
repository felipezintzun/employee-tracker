DROP DATABASE if exists employee_tracker;
create DATABASE employee_tracker;
use employee_tracker;
CREATE TABLE department(id INT PRIMARY KEY AUTO_INCREMENT, NAME VARCHAR(30) UNIQUE NOT NULL);
CREATE TABLE role (id INT PRIMARY KEY AUTO_INCREMENT, TITLE VARCHAR(30) NOT NULL, SALARY DECIMAL(10,2),department_id INT REFERENCES department_table(id));
CREATE TABLE employee(id INT PRIMARY KEY AUTO_INCREMENT, 
FIRST_NAME VARCHAR(30)NOT NULL, LAST_NAME VARCHAR(30)NOT NULL, role_id INT REFERENCES roles_table(id), manager_id INT REFERENCES employee_table(id)on delete set null);
