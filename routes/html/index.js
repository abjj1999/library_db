const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
})

router.get("/book", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/book.html"));
});

router.get("/customer", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/customer.html"));
});

router.get("/staff", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/staff.html"));
});

router.get("/event", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/event.html"));
});

router.get("/movie", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/movie.html"));
});


module.exports = router;