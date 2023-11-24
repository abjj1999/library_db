const db = require('../../config/connection');
const books = require('./books');

const router = require('express').Router();

router.use('/books', books);

module.exports = router;