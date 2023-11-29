const router = require('express').Router();

const db = require('../../config/connection');


router.get('/', (req, res) => {
    // get all customers and Join with customer_book to see which books they have checked out
    // be sure to include its associated Book data (JOIN with the Books table)
    // if the user has no books checked out, return "No books checked out"
    // execlude the password field

    const sql = `SELECT * FROM CUSTOMER
    LEFT JOIN customer_book ON customer.id = customer_book.customer_id
    LEFT JOIN book ON customer_book.book_id = book.id`;

    // const sql = `SELECT * FROM CUSTOMER`;
    
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ message: 'Failed to retrieve customers' });
            return;
        }
        res.json(rows);
    });
})

router.post('/', ({ body }, res) => {

    const sql = `INSERT INTO CUSTOMER (name, email, password) VALUES (?,?,?)`;
    const params = [body.name, body.email, body.password];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ message: 'error adding customer' });
            return;
        }
        res.json({
            message: 'customer added',
            data: body
        });
    });
})

module.exports = router;