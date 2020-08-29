$(document).ready(onReady);

let employeeData = [];
const maxSalary = 20000;
let currentSalary = 0;

function onReady() {
  $('#addEmployeeBtn').on('click', addEmployee);
  displayEmployees();
}
function addEmployee() {
  //function tostore data in an array as objects
  console.log('in addEmployee');
  const newEmployee = {
    firstName: $('#empFirstNameIn').val(),
    lastName: $('#empLastNameIn').val(),
    empID: $('#empNumberIn').val(),
    empTitle: $('#empTitleIn').val(),
    empSalary: $('#empSalaryIn').val(),
  };
  currentSalary += $('#empSalaryIn').val();
  employeeData.push(newEmployee);
  displayEmployees();
  //resaet the form fields to empty after click function
  $('#empFirstNameIn').val('');
  $('#empLastNameIn').val('');
  $('#empNumberIn').val('');
  $('#empTitleIn').val('');
  $('#empSalaryIn').val();
} // end addEmployee
function displayEmployees() {
  console.log('in displayEmployees');
  // target an ul element on DOM
  let el = $('#empData');
  // empty el
  el.empty();
  // loop through inventory
  for (let i = 0; i < employeeData.length; i++) {
    // append each item to the  table body]
    el.append(`<tr>
     <td>${employeeData[i].firstName}</td>
      <td>${employeeData[i].lastName}</td>
        <td> ${employeeData[i].empID}</td>
        <td> ${employeeData[i].empTitle}</td>
        <td> ${employeeData[i].empSalary}</td>
        <td> <button class="deleteBtn">Delete</button> </td> </tr>`);
  } // end for
} // end displayEmployees
