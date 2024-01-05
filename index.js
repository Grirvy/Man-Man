const inquirer = require('inquirer');
const connection = require('./config/CONN');
const Department = require('./models/Dept');
const Role = require('./models/Role');
const Employee = require('./models/Emp');


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
        process.exit(0);

    }
  } catch (e) {
      console.error('Error:', e.message);
      startApplication();
  }
}

async function viewAllDepartments() {
  try {
      const depts = await Department.findAll();
      console.table(depts);
      startApplication();
  } catch (error) {
      console.error('Error:', error.message);
      startApplication();
  }
}

async function viewAllRoles() {
  try {
      const roles = await Role.findAll();
      console.table(roles);
      startApplication();
  } catch (error) {
      console.error('Error:', error.message);
      startApplication();
  }
}

async function viewAllEmployees() {
  try {
      const employees = await Employee.findAll();
      console.table(employees);
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

      const newDepartment = await Department.create({
          title: answer.departmentName,
      });

      console.log('Department added successfully!');
      startApplication();
  } catch (error) {
      console.error('Error:', error.message);
      startApplication();
  }
}

async function addRole() {
  try {
      // Implement prompts for adding a role
      const roleAnswers = await inquirer.prompt([
          // Add prompts for role information (e.g., name, salary, department)
      ]);

      // Create the role using the gathered information
      const newRole = await Role.create({
          // Use roleAnswers to set the attributes of the new role
      });

      console.log('Role added successfully!');
      startApplication();
  } catch (error) {
      console.error('Error:', error.message);
      startApplication();
  }
}

async function addEmployee() {
  try {
      // Implement prompts for adding an employee
      const employeeAnswers = await inquirer.prompt([
          // Add prompts for employee information (e.g., first name, last name, role, manager)
      ]);

      // Create the employee using the gathered information
      const newEmployee = await Employee.create({
          // Use employeeAnswers to set the attributes of the new employee
      });

      console.log('Employee added successfully!');
      startApplication();
  } catch (error) {
      console.error('Error:', error.message);
      startApplication();
  }
}


async function updateEmployeeRole() {
  try {
      // Implement similar logic with prompts for updating an employee role
  } catch (error) {
      console.error('Error:', error.message);
      startApplication();
  }
}

startApplication();