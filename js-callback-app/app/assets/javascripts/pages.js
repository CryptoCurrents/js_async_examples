
function getData() {
  let employeesDiv = document.getElementById('employees');
  $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json', function(employees) {
    let  htmlString = "";
    for (let employee of employees) {
      htmlString += `
        <div class="employee" onclick="changeEmployee(this)">
          <h2>${employee.name}</h2>
          <h3>Dept: ${employee.department}</h3>
          <h3>Title: ${employee.job_titles}</h3>
          <br />
        </div>
      `;
    }

    employeesDiv.innerHTML = htmlString;
  });
}

function changeEmployee(divEmployee) {
  divEmployee.classList.toggle('grey-out');
}

function showAll() {
  let employees = document.querySelectorAll('.employee');

  for (let employee of employees) {
    employee.classList.remove('hidden');
  }
}

function showPolice() {
  let employees = document.querySelectorAll('.employee');

  for (let employee of employees) {
    if (employee.innerHTML.indexOf('POLICE') !== -1) {
      employee.classList.remove('hidden');
    } else {
      employee.classList.add('hidden');
    }
  }
}














