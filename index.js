let form = document.querySelector("form");
let employees = [];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.querySelector(".name").value;
  let profession = document.querySelector(".profession").value;
  let age = document.querySelector(".age").value;
  let errorMessage = document.querySelector(".errorMessage");
  let successMessage = document.querySelector(".successMessage");

  //   Reset error
  errorMessage.innerText = "";
  successMessage.innerText = "";

  let isValid = true;

  if (!name || !profession || !age) {
    errorMessage.innerText =
      "Error : Please Make sure All the fields are filled before adding in an employee !";
    successMessage.innerText = "";
    isValid = false;
  }
 
  if (isValid) {
     const newEmployee = {
    id: employees.length +1,
    name,
    profession,
    age,
  };
    successMessage.innerText = "Success : Employee Added!";
    employees.push(newEmployee);
    displayEmployee();
  }
});

function displayEmployee() {
  let addedEmployee = document.querySelector(".addedEmployee");
  addedEmployee.innerHTML = "";
  employees.forEach((employee) => {
    let employeeList = document.createElement("div");
    employeeList.classList.add('employee-list')
    employeeList.innerHTML = `
    <span class="employee-data">
              <p>${employee.id}</p>
              <p>Name :${employee.name}</p>
              <p>Profession : ${employee.profession}</p>
              <p>Age : ${employee.age}</p>
            </span>
            <span class="employee-delete"><button class="delete-btn" data-id="${employee.id}" >Delete User</button></span>
    `;
    addedEmployee.append(employeeList);
  
  });
  const deleteBtn = document.querySelectorAll('.delete-btn');
  deleteBtn.forEach((btn) =>{
    btn.addEventListener('click', handleDeleteClick)
  })
}

const handleDeleteClick =(event)=>{
 const id = event.target.dataset.id
 handleDelete(id);
}

const handleDelete = (id) =>{
 employees = employees.filter((item) => item.id != id);
 displayEmployee();
}
