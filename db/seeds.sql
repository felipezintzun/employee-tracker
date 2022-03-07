use employee_tracker;

INSERT INTO department (name)
VALUES ("Athlete");
INSERT INTO department (name)
VALUES ("Coaching");
INSERT INTO department (name)
VALUES ("Medical");
INSERT INTO department (name)
VALUES ("Equipment");

INSERT INTO role (title, salary, department_id)
VALUES ("Quarterback", 500000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Running Back", 40000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Center", 150000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Linebacker", 125000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 135000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Head Coach", 450000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Offensive Coordinator", 250000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Defensive Coordinator", 250000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 350000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Doctor", 300000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Trainer", 200000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Physical Therapy", 100000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 100000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Water", 50000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Gear", 20000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Eletrical", 70000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 70000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Reggie", "Bush", 1);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John", "Madden", 2);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Ryan", "Smith",3 );
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Michael", "Loredo", 4);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Michael", "Vick", 1,1);
INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Tom", "Brady", 1,1);
INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Patrick", "Mahomes", 1,1);


INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Cass", "Mitchel", 2,2);
INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Nick", "Saban", 2,2);
INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Bill", "Belichick", 2,2);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Ryaner", "Smither",3,3 );
INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Brandon", "Andrews", 3,3);
INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Ana", "Tanguma", 3,3);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Miles", "Lord", 4,4);
INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Sarah", "Bigelow", 4,4);
INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Big", "Mike", 4,4);



