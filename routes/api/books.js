const router = require('express').Router();

const db = require('../../config/connection');



router.get('/', (req, res) => {
   
        db.query('SELECT * FROM BOOK', (err, rows) => {
            if (err) {
                res.status(500).json({ message: 'Failed to retrieve books' });
                return;
            }
            res.json(rows);
        });

    
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM BOOK WHERE id = ?', id, (err, rows) => {
        if (err) {
            res.status(500).json({ message: 'Failed to retrieve book' });
            return;
        }
        res.json(rows);
    });
});

router.post('/', (req, res) => {
    const book = req.body;
    db.query('INSERT INTO BOOK SET ?', book, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to insert book' });
            return;
        }
        res.json({ message: 'Book inserted successfully', id: result.insertId });
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM BOOK WHERE id = ?', id, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Failed to delete book' });
            return;
        }
        res.json({ message: 'Book deleted successfully', id: result.insertId });
    });
});


module.exports = router;