const express = require('express');
const authController = require('../controllers/authController');
const upload = require('../config/upload');

const router = express.Router();

router.get('/signup', authController.showSignup);
router.post('/signup', upload.single('pet_image'), authController.signup);
router.get('/login', authController.showLogin);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/', authController.showIndex);

module.exports = router;
