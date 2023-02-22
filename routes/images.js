const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Estamos en la pagina de imagenes')
});

router.get('/add', (req,res)=>{
    res.render('images/add.hbs')
})


module.exports = router;