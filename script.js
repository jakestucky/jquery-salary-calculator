$(document).ready(onReady);

let employeeData = [];

function onReady() {
  $('#addEmployeeBtn').on('click', addEmployee);
}
function addEmployee() {
  console.log('in addEmployee');
  const newEmployee = {
    firstName: $('#empFirstNameIn').val(),
    lastName: $('#empLastNameIn').val(),
    empID: $('#empNumberIn').val(),
    empTitle: $('#empTitleIn').val(),
    empSalary: $('#empSalaryIn').val(),
  };
  employeeData.push(newEmployee);
  console.log(employeeData);
}
