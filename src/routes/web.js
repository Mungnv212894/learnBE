const express = require('express');
const router = express.Router();
const { getHomePage, getABC, viduEJS,postCreateUser ,getCreatePage,getUpdatePage,postUpdateUser} = require('../controllers/homeController');

router.get('/', getHomePage);
router.get('/abc', getABC);
router.get('/test', viduEJS);

router.get('/create',getCreatePage);
router.get('/update/:id',getUpdatePage);
router.post('/create-user',postCreateUser);
router.post('/update-user',postUpdateUser);

module.exports = router;
