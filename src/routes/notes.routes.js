const {Router} = require('express')

const router = Router()

router.get('/notes', (req,res)=>{
    res.send('Retrieveing notes')
})


router.post('/notes', (req,res)=>{
    res.send('create notes')
})


router.delete('/notes', (req,res)=>{
    res.send('delete notes')
})



module.exports = router;


