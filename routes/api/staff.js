const router = require('express').Router();

const db = require('../../config/connection');


router.get('/', (req, res) => {
   

    const sql = `SELECT * FROM Staff`;

    
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ message: 'Failed to retrieve staff' });
            return;
        }
        res.json(rows);
    });
})

router.post('/', ({ body }, res) => {
    
        const sql = `INSERT INTO Staff (name, email, password, role) VALUES (?,?,?,?)`;
        const params = [body.name, body.email, body.password, body.role];
    
        db.query(sql, params, (err, result) => {
            if (err) {
                res.status(400).json({ message: 'error adding staff' });
                return;
            }
            res.json({
                message: 'staff added',
                data: body
            });
        });
    })

module.exports = router;