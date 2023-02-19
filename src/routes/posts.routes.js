const {Router} = require('express')
const {getPosts, deletePost, createPost} = require('../controllers/posts.controller')

const router = Router()
//GET
router.get('/posts', getPosts)

//POST
router.post('/posts', createPost)

//DELETE
router.delete('/posts/:id', deletePost)



module.exports = router;


