$(document).ready(onReady);

let employeeData = [];
const maxSalary = 20000;
let currentSalary = 0;
let monthlySalary = 0;

function onReady() {
  $(document).on('click', '#addEmployeeBtn', addEmployee);
  $(document).on('click', '.deleteEmployeeBtn', delEmployee);
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
  currentSalary += Number(newEmployee.empSalary);
  employeeData.push(newEmployee);
  displayEmployees();
  salaryChecker();

  //resaet the form fields to empty after click function
  $('#empFirstNameIn').val('');
  $('#empLastNameIn').val('');
  $('#empNumberIn').val('');
  $('#empTitleIn').val('');
  $('#empSalaryIn').val('');
} // end addEmployee
function delEmployee() {
  //target this and delete the row it is on
  $(this).closest('tr').remove();
} //end delEmployee
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
        <td class="empSalary"> ${employeeData[i].empSalary}</td>
        <td> <button class="deleteEmployeeBtn">Delete</button> </td> </tr>`);
  } // end for
} // end displayEmployees
function salaryChecker() {
  monthlySalary = currentSalary / 12;
  $('#monthlySalaryDisp').text(`
  Total Monthly: $ ${monthlySalary}
    `);
  if (monthlySalary > maxSalary) {
    //add class if over salary amount
    $('#monthlySalaryDisp').addClass('tooHigh');
  }
}
