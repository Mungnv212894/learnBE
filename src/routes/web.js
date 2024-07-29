const express = require('express');
const router = express.Router();
const { getHomePage, getABC, viduEJS } = require('../controllers/homeController');

router.get('/', getHomePage);
router.get('/abc', getABC);
router.get('/test', viduEJS);

module.exports = router;
