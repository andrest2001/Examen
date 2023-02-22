const express = require('express');
const router = express.Router();
const pool = require('../database')
/* GET home page. */
router.get('/', async(req, res, next)=> {
    const [images]=await pool.query('SELECT * FROM images')
    console.log(images)
    
    res.render('images/list', {images})
});

router.get('/add', (req,res)=>{
    res.render('images/add.hbs')
}),

router.post('/add',async(req,res)=>{
    
    const { titulo, imagen, descripcion }= req.body
    const newImage ={
      titulo,
      imagen,
      descripcion
    }
    
    await pool.query('INSERT INTO images SET ?', [newImage])
})


module.exports = router;