const express = require('express')
const router=express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
  })
  
router.get ('/viduEJS', (req, res) => {
    res.render('sample');
  })

module.exports = router;