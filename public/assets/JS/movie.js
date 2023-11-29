const viewContainer = document.querySelector(".view_container");
const view_btn = document.querySelector("#view_btn");
const add_btn = document.querySelector("#add_btn");

const viewMovie = () => {

    viewContainer.innerHTML = "";
    console.log("view all movies");
    fetch("/api/movie")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            viewContainer.innerHTML = "";
            data.data.forEach(movie => {
                const movieDiv = document.createElement("div");
                movieDiv.classList.add("border", "border-dark", "p-2", "m-2", "col-lg-4", "col-md-5", "col-sm-10", "col-xs-11");
                movieDiv.innerHTML = `
                <h3>Name: ${movie.title}</h3>
                <p>Genre: ${movie.genre}</p>
                <p>Director: ${movie.director}</p>
                <p>Year: ${movie.year}</p>
               
                `;
                viewContainer.appendChild(movieDiv);
            });
        });
}


const addMovie = () => {

    viewContainer.innerHTML = "";
    const addMovieForm = document.createElement("form");
    addMovieForm.classList.add("border", "border-dark", "p-2", "m-2", "col-lg-4", "col-md-5", "col-sm-10", "col-xs-11");
    addMovieForm.innerHTML = `
    <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" class="form-control">
    </div>
    <div class="form-group">
        <label for="genre">Genre:</label>
        <input type="text" id="genre" class="form-control">
    </div>
    <div class="form-group">
        <label for="director">Director:</label>
        <input type="text" id="director" class="form-control">
    </div>
    <div class="form-group">
        <label for="year">Year:</label>
        <input type="text" id="year" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Add Movie</button>
    `;
    viewContainer.appendChild(addMovieForm);
    addMovieForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.querySelector("#title").value;
        const genre = document.querySelector("#genre").value;
        const director = document.querySelector("#director").value;
        const year = document.querySelector("#year").value;
        const movie = {
            title: title,
            genre: genre,
            director: director,
            year: year
        }
        fetch("/api/movie", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(movie)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                viewMovie();
            })
    })
}

view_btn.addEventListener("click", viewMovie);
add_btn.addEventListener("click", addMovie);