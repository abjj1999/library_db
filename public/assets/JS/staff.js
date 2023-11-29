const viewContainer = document.querySelector(".view_container");
const view_btn = document.querySelector("#view_btn");
const add_btn = document.querySelector("#add_btn");

const viewStaff = () => {
    viewContainer.innerHTML = "";
    console.log("view all staff");
    fetch("/api/staff")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        viewContainer.innerHTML = "";
        data.forEach(staff => {
            const staffDiv = document.createElement("div");
            staffDiv.classList.add("border", "border-dark", "p-2", "m-2", "col-lg-4", "col-md-5", "col-sm-10", "col-xs-11");
            staffDiv.innerHTML = `
            <h3>Name: ${staff.name}</h3>
            <p>Email: ${staff.email}</p>
            <p>Role: ${staff.role}</p>
            `;
            viewContainer.appendChild(staffDiv);
        });
    });
}

const addStaff = () => {
    viewContainer.innerHTML = "";
    const addStaffForm = document.createElement("form");
    addStaffForm.classList.add("border", "border-dark", "p-2", "m-2", "col-lg-4", "col-md-5", "col-sm-10", "col-xs-11");
    addStaffForm.innerHTML = `
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
    <div class="form-group">
        <label for="role">Role:</label>
        <input type="text" id="role" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Add Staff</button>
    `;
    viewContainer.appendChild(addStaffForm);
    addStaffForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const role = document.querySelector("#role").value;
        const staff = {
            name: name,
            email: email,
            password: password,
            role: role
        };
        fetch("/api/staff", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(staff)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            viewStaff();
        });
    });
}

view_btn.addEventListener("click", viewStaff);
add_btn.addEventListener("click", addStaff);
