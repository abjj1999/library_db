const router = require('express').Router();

const db = require('../../config/connection');

// GET all movies
router.get('/', (req, res) => {
    const sql = `SELECT * FROM movie`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.json({
            message: 'success',
            data: rows
        });
    });
});

// post 

router.post('/', ({ body }, res) => {
    const sql = `INSERT INTO Movie (title, director, genre, year) VALUES (?,?,?,?)`;

    const params = [body.title, body.director, body.genre, body.year];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }

        res.json({
            message: 'success',
            data: body
        });
    });

})
    

module.exports = router;