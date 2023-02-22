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
    res.redirect('/images')
})

router.get('/delete/:id' , async(req,res)=>{
    const {id}= req.params
    await pool.query('DELETE  FROM images WHERE id = ?', [id])
    
    
    res.redirect('/images')
})

router.get('/edit/:id', async(req,res)=>{
    const {id}= req.params
    const [images] = await pool.query('SELECT * FROM images WHERE id = ?', [id])
    console.log(images)
    res.render('images/edit', {images:images[0]})
    res.redirect('/images')
})

router.post('/edit/:id', async(req,res)=>{
    const { id } = req.params
    const {titulo, imagen, descripcion}= req.body
    const newImage ={
        titulo,
        imagen,
        descripcion
    }
    await pool.query('UPDATE images SET ? WHERE id = ?',[newImage, id])
    res.redirect('/images')
})
module.exports = router;