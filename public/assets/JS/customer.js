const viewContainer = document.querySelector(".view_container");
const viewBtn = document.querySelector("#view_btn");
const addBtn = document.querySelector("#add_btn");


const viewAllCustomers = () => {
    console.log("view all customers");
    fetch("/api/customer")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        viewContainer.innerHTML = "";
        data.forEach(customer => {
            const customerDiv = document.createElement("div");
            customerDiv.classList.add("border", "border-dark", "p-2", "m-2", "col-lg-4", "col-md-5", "col-sm-10", "col-xs-11");
            customerDiv.innerHTML = `
            <h3>Name: ${customer.name}</h3>
            <p>Email: ${customer.email}</p>



            `;
            viewContainer.appendChild(customerDiv);
        });
    });
}

const addUser = () => {
    // create the form first 
    const addUserForm = document.createElement("form");
    addUserForm.classList.add("border", "border-dark", "p-2", "m-2", "col-lg-4", "col-md-5", "col-sm-10", "col-xs-11");
    addUserForm.innerHTML = `
    <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" class="form-control">
    </div>
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" class="form-control">
    </div>
    <div class="form-group">
        <label for="password">Password:</label>
        <input type="text" id="password" class="form-control">
    </div>
    <button type="submit" class="btn btn-dark mt-1">Add User</button>
    `;
    viewContainer.appendChild(addUserForm);
    addUserForm.addEventListener("submit", handleAddUser);
    


}

function handleAddUser(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const newUser = { name, email, password };
    console.log(newUser);
    fetch("/api/customer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        viewAllCustomers();
    })
    .catch(err => {
        console.log(err);
    });
}

addBtn.addEventListener("click", addUser);
viewBtn.addEventListener("click", viewAllCustomers);
