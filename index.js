const inquirer = require('inquirer');
const mysql = require('mysql2');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Man-Man');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database');
  startApplication();
});

async function startApplication() {
  try {
    const answer = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    });

    if (answer.action === 'View all departments') {
      await viewAllDepartments();

    } else if (answer.action === 'View all roles') {
      await viewAllRoles();

    } else if (answer.action === 'View all employees') {
      await viewAllEmployees();

    } else if (answer.action === 'Add a department') {
      await addDepartment();

    } else if (answer.action === 'Add a role') {
      await addRole();

    } else if (answer.action === 'Add an employee') {
      await addEmployee();

    } else if (answer.action === 'Update an employee role') {
      await updateEmployeeRole();

    } else if (answer.action === 'Exit') {
      connection.end();

    }

  } catch (error) {
    console.error('Error:', error.message);
    startApplication();
  }
}

async function viewAllDepartments() {
  try {
    const query = 'SELECT * FROM department';
    const [results] = await connection.promise().query(query);
    console.table(results);
    startApplication();
  } catch (error) {
    console.error('Error:', error.message);
    startApplication();
  }
}

async function viewAllRoles() {
  try {
    const query = 'SELECT * FROM role';
    const [results] = await connection.promise().query(query);
    console.table(results);
    startApplication();
  } catch (error) {
    console.error('Error:', error.message);
    startApplication();
  }
}

async function viewAllEmployees() {
  try {
    const query = 'SELECT * FROM employee';
    const [results] = await connection.promise().query(query);
    console.table(results);
    startApplication();
  } catch (error) {
    console.error('Error:', error.message);
    startApplication();
  }
}

async function addDepartment() {
  try {
    const answer = await inquirer.prompt({
      type: 'input',
      name: 'departmentName',
      message: 'Enter the name of the department:',
    });

    const query = 'INSERT INTO department (name) VALUES (?)';
    await connection.promise().query(query, [answer.departmentName]);
    console.log('Department added successfully!');
    startApplication();
  } catch (error) {
    console.error('Error:', error.message);
    startApplication();
  }
}

async function addRole() {
  // Implement similar logic with try-catch for adding a role
}

async function addEmployee() {
  // Implement similar logic with try-catch for adding an employee
}

async function updateEmployeeRole() {
  // Implement similar logic with try-catch for updating an employee role
}