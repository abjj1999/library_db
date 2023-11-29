const db = require('../../config/connection');
const books = require('./books');
const customer = require('./customer');
const staff = require('./staff');
const movie = require('./movie');

const router = require('express').Router();

router.use('/books', books);
router.use('/customer', customer);
router.use('/staff', staff);
router.use('/movie', movie);

module.exports = router;