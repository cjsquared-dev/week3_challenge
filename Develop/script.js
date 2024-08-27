// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data

const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let employeesArray = [];
  let addEmployees = true;

  while (addEmployees) {
    let firstName = window.prompt("Employee's First Name?");
    let lastName = window.prompt("Employee's Last Name?");
    let salaryInput = window.prompt("Employee's Salary?");
    let salary = isNaN(parseFloat(salaryInput)) ? 0 : parseFloat(salaryInput);

    employeesArray.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });

    addEmployees = confirm('Would you like to add another employee?');
  
  } 
  return employeesArray;
};


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  employeesArray.forEach(employeesArray => {totalSalary += employeesArray.salary;});
  const averageSalary = totalSalary/employeesArray.length;
  const averageSalaryWithTwoDecimals = parseFloat(averageSalary).toFixed(2);
  
//  console.log(averageSalaryWithTwoDecimals);
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalaryWithTwoDecimals}`);
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary}`);

  //log employee counts and check if decimals or not and provide respective messaging
 // const checkDecimals = function () {
 //   if (averageSalaryWithTwoDecimals % 1 !== 0) {
 //     console.log(`The average employee salary between our ${employeesArray.length} employee(s) is: $${averageSalaryWithTwoDecimals.toFixed(2)} when given salaries with decimals.`);
 //   } else {
 //     console.log(`The average employee salary between our ${employeesArray.length} employee(s) is: $${averageSalary.toFixed(2)} when given salaries with no decimals.`);
 //   }
  
    
 // }

 // checkDecimals();
  
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  const {firstName, lastName} = randomEmployee;

  console.log(`Congratulations to ${firstName} ${lastName}, our random drawing winner!`)

};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
