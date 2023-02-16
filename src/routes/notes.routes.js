const {Router} = require('express')
const pool = require('../database')


const router = Router()

router.get('/notes', async (req,res)=>{
    const result = await pool.query('SELECT NOW()')
    console.log(result)
    res.json('executed')
})


router.post('/notes', (req,res)=>{
    res.send('create notes')
})


router.delete('/notes', (req,res)=>{
    res.send('delete notes')
})



module.exports = router;


