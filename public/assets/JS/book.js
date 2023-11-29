// console.log("hello from book.js")

const viewContainer = document.querySelector(".view_container");
const viewBtn = document.querySelector("#view_btn");
const addBtn = document.querySelector("#add_btn");

const AvailableStatus = (a) => {
    if (a === 1) {
        return "Available";
    } else {
        return "Not Available";
    }

} 

const viewAllBooks = () => {
    viewContainer.innerHTML = "";
    console.log("view all books");
    fetch("/api/books")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        viewContainer.innerHTML = "";
        data.forEach(book => {
            const bookDiv = document.createElement("div");
            bookDiv.classList.add("border", "border-dark", "p-2", "m-2", "col-lg-4", "col-md-5", "col-sm-10", "col-xs-11");
            bookDiv.innerHTML = `
            <h3>Title: ${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>ISBN: ${book.isbn}</p>
            <p>Pages: ${book.pages}</p>
            <p>${AvailableStatus(book.available)}</p>
            `;
            viewContainer.appendChild(bookDiv);
        });
    });
};

const addBook = () => {
    // create the input fields for the user to enter the book information
    // create a button to submit the form
    // create a fetch request to post the new book to the database
    // create a function to handle the fetch request
    viewContainer.innerHTML = "";
    const addBookForm = document.createElement("form");
    addBookForm.classList.add("border", "border-dark", "p-2", "m-2", "col-lg-4", "col-md-5", "col-sm-10", "col-xs-11");
    addBookForm.innerHTML = `
    <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" class="form-control">
    </div>
    <div class="form-group">
        <label for="author">Author:</label>
        <input type="text" id="author" class="form-control">
    </div>
    <div class="form-group">
        <label for="isbn">ISBN:</label>
        <input type="text" id="isbn" class="form-control">
    </div>
    <div class="form-group">
        <label for="pages">Pages:</label>
        <input type="text" id="pages" class="form-control">
    </div>
    <div class="form-group">
        <label for="available">Available:</label>
        <input type="text" id="available" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    `;
    viewContainer.appendChild(addBookForm);
    addBookForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.querySelector("#title").value;
        const author = document.querySelector("#author").value;
        const isbn = document.querySelector("#isbn").value;
        const pages = document.querySelector("#pages").value;
        const available = document.querySelector("#available").value;
        const book = {
            title: title,
            author: author,
            isbn: isbn,
            pages: pages,
            available: available
        };
        console.log(book);
        fetch("/api/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            viewAllBooks();
        });
    });

}

viewBtn.addEventListener("click", viewAllBooks);
addBtn.addEventListener("click", addBook);