const express = require('express');
const router = express.Router();

const { index, products, contact, about, login, register, admin, loginProcess } = 
require('../controllers/mainController');

/* middlewares */
const accessAdmin = require('../middlewares/accessAdmin')

/* page */
router.get('/', index);
router.get('/products', products);
router.get('/contact', contact);
router.get('/about', about);
router.get('/register', register);
router.get('/login', login);
router.get('/admin', accessAdmin, admin);

module.exports = router;